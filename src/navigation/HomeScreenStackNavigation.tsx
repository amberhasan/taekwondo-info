import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Platform} from 'react-native'; // Import Platform from react-native
import HomeScreen from '../screens/HomeScreen';
import ChildrensClassesScreen from '../screens/ChildrensClassesScreen';
import colors from '../theme/colors';
import BeltRequirementsScreen from '../screens/BeltRequirementsScreen';
import BeltDetailsScreen from '../screens/BeltDetailsScreen';

let Stack = createStackNavigator();

const HomeScreenStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.titles, // the back button
        headerStyle: {
          backgroundColor: colors.primaryBackground,
        },
        headerTitleStyle: {
          color: colors.titles,
        },
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home Page',
        }}
      />
      <Stack.Screen
        name="ChildrensClassesScreen"
        component={ChildrensClassesScreen}
        options={{
          title: `Children's Classes`,
        }}
      />
      <Stack.Screen
        name="BeltRequirementsScreen"
        component={BeltRequirementsScreen}
        options={{
          title: `Belt Requirements`,
        }}
      />
      <Stack.Screen
        name="BeltDetailsScreen"
        component={BeltDetailsScreen}
        options={({route}) => ({
          title: 'Belt Details',
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeScreenStackNavigation;
