import RootSaga from './Middlewares'
import RootReducers from './Reducers'
import createSagaMiddleware from 'redux-saga'
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import { persistStore, persistReducer } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  // blacklist: ['AppReducer'],
};
const pReducer = persistReducer(persistConfig, RootReducers);
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  pReducer, composeWithDevTools(applyMiddleware(sagaMiddleware))
)
const persistor = persistStore(store);
// console.log('persistor', store.getState())

sagaMiddleware.run(RootSaga)
export { store, persistor }



