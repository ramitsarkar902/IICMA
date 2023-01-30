import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import themeReducer from "./themeSlice.js";
import userReducer from "./userSlice.js";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

/* const persistedReducer = persistReducer(persistConfig, reducers); */
const reducers = combineReducers({
  theme: themeReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  /* devTools: false, */  //add during production to disable dev tools
});

export const persistor = persistStore(store);
