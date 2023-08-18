import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'; // Replace this with the actual path to your HomeScreen component
import ChildrensClassesScreen from '../screens/ChildrensClassesScreen';
import colors from '../theme/colors';

let Stack = createStackNavigator();

const HomeScreenStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home Page',
          headerStyle: {backgroundColor: colors.black},
          headerTitleStyle: {color: colors.darkYellow},
        }}
      />
      <Stack.Screen
        name="ChildrensClassesScreen"
        component={ChildrensClassesScreen}
        options={{
          title: `Children's Classes`,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeScreenStackNavigation;
