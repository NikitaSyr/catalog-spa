import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux";
import itemsReducer from "./itemsReducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";

let rootReducer = combineReducers({
    itemsPage: itemsReducer,
})

type RootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducerType>
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store