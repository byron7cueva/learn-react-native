import React from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { Loading } from './src/sections/components/loading'
import { AppLayout } from './src/app'

import { store, persistor } from './utils/store'

const App: () => React$Node = () => {
  return (
    <Provider
        store={store}
      >
      <PersistGate loading={
        <Loading />
      } persistor={persistor}>
        <AppLayout />
      </PersistGate>
    </Provider>
  );
};
/* class App extends Component {
  render() {
    return (
      <Provider
        store={store}
      >
       <PersistGate loading={
         <Loading />
       } persistor={persistor}>
         <AppLayout />
       </PersistGate>
      </Provider>
    )
  }
} */

export default App;
