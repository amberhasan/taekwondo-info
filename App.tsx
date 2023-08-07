import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={BottomTabNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
