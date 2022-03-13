import { combineReducers } from "redux";
import { userReducer } from "./reducer";
import { productReducer } from "./reducerProduct";
import {cartReducer} from "./CartReducer"

export default combineReducers({productReducer,userReducer,cartReducer});