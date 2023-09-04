import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigation from './BottomNavigation';
import {enableLatestRenderer} from 'react-native-maps';
import {Provider} from 'react-redux';
import store from '../redux/store';

enableLatestRenderer();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
