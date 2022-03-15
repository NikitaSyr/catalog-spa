import {AppStateType, BaseThunkType, InferActionsTypes} from "./reduxStore";
import {Dispatch} from "redux";
import {ItemsType} from "../types/types";

const ADD_ITEMS = 'CART/ADD_ITEMS';


let initialState = {
    itemsCount: 0 as number,
}

const cartReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_ITEMS: {
            return {
                ...state,
                itemsList: action.itemsList,
            }
        }
        default:
            return state;
    }
}

export const actions = {
    setItemsList: (itemsList: Array<ItemsType>) => ({type: ADD_ITEMS, itemsList} as const),
}

export default cartReducer;

export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>


export const getItemsList = (state: AppStateType) => {
    return state.itemsPage.itemsList;
}

