import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'; // Replace this with the actual path to your HomeScreen component
import BeltColorsMenuScreen from '../screens/BeltColorsMenuScreen';

// const Stack = createStackNavigator();

let Stack = createStackNavigator();

const HomeScreenStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="BeltRequirements" component={BeltColorsMenuScreen} />
    </Stack.Navigator>
  );
};

export default HomeScreenStack;
