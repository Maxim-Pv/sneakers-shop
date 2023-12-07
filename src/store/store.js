import { combineReducers, legacy_createStore as createStore } from "redux";
import { cartReducer } from "./cartReducer";

const rootReducer = combineReducers({
    cart: cartReducer,
})

const store = createStore(rootReducer)

export default store