import {catalogAPI} from "../api/api";
import {AppStateType, BaseThunkType, InferActionsTypes} from "./reduxStore";
import {Dispatch} from "redux";
import {ItemsType} from "../types/types";

const SET_ITEMS = 'SET_ITEMS';

let initialState = {
    itemsList: [] as Array<ItemsType>,
}

const itemsReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case SET_ITEMS: {
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
    setItemsList: (itemsList: Array<ItemsType>) => ({type: SET_ITEMS, itemsList} as const),
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

