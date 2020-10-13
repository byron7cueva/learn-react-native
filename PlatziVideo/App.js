import React from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { NavigationContainer } from '@react-navigation/native'

import { Loading } from './src/sections/components/loading'
import { AppNavigator } from './src/app-navigator';

import { store, persistor } from './utils/store'


const App: () => React$Node = () => {
  return (
    <Provider
      store={store}
    >
      <PersistGate loading={
        <Loading />
      } persistor={persistor}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

/*const App: () => React$Node = () => {
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
};*/
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
