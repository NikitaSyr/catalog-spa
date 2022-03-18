import {catalogAPI} from "../api/api";
import {AppStateType, BaseThunkType, InferActionsTypes} from "./reduxStore";
import {Dispatch} from "redux";
import {ItemsType} from "../types/types";

const SET_ITEMS = 'ITEMS/SET_ITEMS';
const ADD_TO_CART = 'ITEMS/ADD_TO_CART';
const REMOVE_ITEM = 'ITEMS/REMOVE_ITEM';
const SUB_QUANTITY = 'ITEMS/SUB_QUANTITY';
const ADD_QUANTITY = 'ITEMS/ADD_QUANTITY';

let initialState = {
    itemsList: [] as Array<ItemsType>,
    addedItems: [] as Array<ItemsType>,
    totalCount: 0 as number,
    totalPrice: 0 as number,
}


const itemsReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case SET_ITEMS: {
            return {
                ...state,
                itemsList: action.itemsList,
            }
        }
        case ADD_TO_CART: {
            let addedItem = state.itemsList.find(item => item.id === action.id)
            let existed_item = state.addedItems.find(item => action.id === item.id)
            if (addedItem) {
                if (existed_item) {
                    addedItem.quantity += 1;
                    return {
                        ...state,
                        totalPrice: state.totalPrice + addedItem.price,
                        totalCount: state.totalCount + 1
                    }
                } else {
                    addedItem.quantity = 1;
                    let newTotal = state.totalPrice + addedItem.price
                    return {
                        ...state,
                        addedItems: [...state.addedItems, addedItem],
                        totalPrice: newTotal,
                        totalCount: state.totalCount + 1
                    }

                }
            }
            return state;
        }
        case REMOVE_ITEM: {
            let itemToRemove = state.addedItems.find(item => action.id === item.id)
            let new_items = state.addedItems.filter(item => action.id !== item.id)

            if (itemToRemove) {
                let newTotal = state.totalPrice - (itemToRemove.price * itemToRemove.quantity)
                return {
                    ...state,
                    addedItems: new_items,
                    totalPrice: newTotal,
                    totalCount: state.totalCount - itemToRemove.quantity
                }
            }
            return state;
        }
        case ADD_QUANTITY: {
            let addedItem = state.itemsList.find(item => item.id === action.id)
            if (addedItem) {
                addedItem.quantity += 1
                let newTotal = state.totalPrice + addedItem.price
                return {
                    ...state,
                    totalPrice: newTotal,
                    totalCount: state.totalCount + 1
                }
            }
            return state;
        }
        case SUB_QUANTITY: {
            let addedItem = state.itemsList.find(item => item.id === action.id)
            if (addedItem) {
                if (addedItem.quantity === 1) {
                    let new_items = state.addedItems.filter(item => item.id !== action.id)
                    let newTotal = state.totalPrice - addedItem.price
                    return {
                        ...state,
                        addedItems: new_items,
                        totalPrice: newTotal,
                        totalCount: state.totalCount - 1
                    }
                } else {
                    addedItem.quantity -= 1
                    let newTotal = state.totalPrice - addedItem.price
                    return {
                        ...state,
                        totalPrice: newTotal,
                        totalCount: state.totalCount - 1
                    }
                }
            }
            return state;
        }
        default:
            return state;
    }
}

export const actions = {
    setItemsListAC: (itemsList: Array<ItemsType>) => ({type: SET_ITEMS, itemsList} as const),
    addToCartAC: (id: number) => ({type: ADD_TO_CART, id} as const),
    removeItemAC: (id: number) => ({type: REMOVE_ITEM, id} as const),
    subtractQuantityAC: (id: number) => ({type: SUB_QUANTITY, id} as const),
    addQuantityAC: (id: number) => ({type: ADD_QUANTITY, id} as const),
}

export const requestItems = (): ThunkType => {
    return async (dispatch: Dispatch<ActionsTypes>) => {
        const itemsList = await catalogAPI.getNewItems();
        dispatch(actions.setItemsListAC(itemsList));
    }
}

export default itemsReducer;

export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>


export const getItemsList = (state: AppStateType) => {
    return state.itemsPage.itemsList;
}

export const getAddedItems = (state: AppStateType) => {
    return state.itemsPage.addedItems;
}

export const getTotalPrice = (state: AppStateType) => {
    return state.itemsPage.totalPrice;
}

export const getTotalCount = (state: AppStateType) => {
    return state.itemsPage.totalCount;
}

