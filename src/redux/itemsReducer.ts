import {catalogAPI} from "../api/api";
import {AppStateType, BaseThunkType, InferActionsTypes} from "./reduxStore";
import {Dispatch} from "redux";
import {ItemsType} from "../types/types";

const SET_ITEMS = 'ITEMS/SET_ITEMS';
// const ADD_ITEM = 'ITEMS/ADD_ITEM';

// type CartItemType = {
//     id: number,
//     itemsCount: number,
//     itemsSum : number,
// }

let initialState = {
    itemsList: [] as Array<ItemsType>,
//     totalItemsCount: 0 as number,
//     totalItemsSum : 0 as number,
//     cartItems : [] as Array<CartItemType>,
    addedItems: [] as Array<ItemsType>,
    total: 0 as number,
}



const itemsReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case SET_ITEMS: {
            return {
                ...state,
                itemsList: action.itemsList,
            }
        }
        // case ADD_ITEM: {
        //     let cartData = action.cartItems;
        //     return {
        //         ...state,
        //         // @ts-ignore
        //         cartItems: [...state.cartItems, {id: cartData.id, itemsCount: cartData.itemsCount + 1, itemsSum: cartData.itemsSum}],
        //     }
        // }
        default:
            return state;
    }
}

export const actions = {
    setItemsList: (itemsList: Array<ItemsType>) => ({type: SET_ITEMS, itemsList} as const),
    // addItemsToCart: (cartItems: Array<CartItemType>) => ({type: ADD_ITEM, cartItems} as const),
}

export const requestItems = (): ThunkType => {
    return async (dispatch: Dispatch<ActionsTypes>) => {
        const itemsList = await catalogAPI.getNewItems();
        dispatch(actions.setItemsList(itemsList));
    }
}

export default itemsReducer;

export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>


export const getItemsList = (state: AppStateType) => {
    return state.itemsPage.itemsList;
}

// export const getCartItems = (state: AppStateType) => {
//     return state.itemsPage.cartItems;
// }

