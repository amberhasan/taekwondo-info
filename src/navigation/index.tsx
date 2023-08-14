import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigation from './BottomNavigation';
import {enableLatestRenderer} from 'react-native-maps';

enableLatestRenderer();

const App = () => {
  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
};

export default App;
