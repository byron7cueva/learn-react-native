import { createStore } from 'redux'
//import { videosReducer } from './reducers/videos'
import { reducer } from './reducers'
import {
  persistStore,
  persistReducer
} from 'redux-persist'

// Se va utilizar de pendiendo de la plataforma
// Web: LocalStorage
// import storage from 'redux-persist/lib/storage'
// ReactNative: AsyncStorage
import AsyncStorage from '@react-native-community/async-storage'

// Redux sin storage
// Recibe reducer, estado inicial, enjanced
/* export const store = createStore(videosReducer, {
  suggestionList: [],
  categoryList: []
})*/

// Configurando la persistencia
const persistConfig = {
  key: 'root', // key del store
  storage: AsyncStorage,
  blacklist: [ // Una lista de las partes del store que no se desea persistir
    'selectedMovie'
  ]
}

// creando el reducer persistente
const persistedReducer = persistReducer(persistConfig, reducer)

// Creando store a traves del reducer persistente
const store = createStore(persistedReducer)

// Creando el store persistente
const persistor = persistStore(store)

export {
  store,
  persistor
}