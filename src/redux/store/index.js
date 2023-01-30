/** @format */

import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { encryptTransform } from "redux-persist-transform-encrypt"
import { persistStore, persistReducer } from "redux-persist"
import { setColorReducer } from "../reducer/setColorReducer"
import { setProjectReducer } from "../reducer/setProjectReducer"

import storage from "redux-persist/lib/storage"

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      onError: (error) => {
        console.log(error)
      },
      secretKey: "sidath",
    }),
  ],
}

const combinedReducer = combineReducers({
  setColor: setColorReducer,
  setProjectReducer: setProjectReducer,
})
const persistedReducer = persistReducer(persistConfig, combinedReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
const persistor = persistStore(store)

export { store, persistor }
