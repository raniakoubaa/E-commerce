
import {createStore,applyMiddleware, compose}from "redux"
import thunk from "redux-thunk"
import rootReducer from "./reducer/rootReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
const persistConfig = {
    key: 'root',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer,)
const devtools=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store=createStore(persistedReducer,compose(applyMiddleware(thunk),devtools));
const persistor = persistStore(store)
export default store;
export {persistor}