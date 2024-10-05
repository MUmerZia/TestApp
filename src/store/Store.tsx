import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer, FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import userSlice from './user/userSlice';
import common from './common';   

const allReducer = combineReducers({ 
  userSlice, 
  common
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whiteList: ['userSlice'],
  blackList:['common']
}

const persistedReducers = persistReducer(persistConfig, allReducer);


export const store = configureStore({
  reducer: persistedReducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], 
    }),
})

export const persister = persistStore(store);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch