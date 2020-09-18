import React from 'react';
// NavigationContainer: Nos ayuda a mantener el estado de la navegacion en general
// tanto de tabs como de stack
import {NavigationContainer} from '@react-navigation/native';

import CoinsStack from './src/components/coins/CoinsStack';

const App = () => {
  return (
    <NavigationContainer>
      <CoinsStack />
    </NavigationContainer>
  );
};

export default App;
