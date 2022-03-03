import { combineReducers } from "redux";
import { userReducer } from "./reducer";
import { productReducer } from "./reducerProduct";


export default combineReducers({productReducer,userReducer});