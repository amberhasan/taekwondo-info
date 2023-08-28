import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the icon library you prefer
import ContactUsScreen from '../screens/ContactUsScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import HomeScreenStackNavigation from './HomeScreenStackNavigation';
import colors from '../theme/colors';

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreenStackNavigation"
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.accentColor,
        tabBarInactiveTintColor: colors.sectionHeaders, //TODO, make the light gray lighter.
        tabBarStyle: {
          height: '8%',
          backgroundColor: colors.tabBarBackgroundColor,
          borderTopWidth: 0.25,
          borderTopColor: colors.tabBarBorderTopColor, // Change the border color to black
        },
        tabBarIcon: ({color, size}) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Contact Us':
              iconName = 'mail';
              break;
            case 'About Us':
              iconName = 'info';
              break;
            case 'Get Started':
              iconName = 'play-circle-filled';
              break;
            default:
              iconName = 'home';
          }
          return (
            <Icon
              name={iconName}
              size={iconName === 'home' ? 45 : size}
              color={color}
            />
          );
        },
      })}>
      <Tab.Screen
        name="About Us"
        component={AboutUsScreen}
        options={{
          headerStyle: {backgroundColor: colors.primaryBackground},
          headerTitleStyle: {color: colors.titles},
        }}
      />
      <Tab.Screen
        name="HomeScreenStackNavigation"
        component={HomeScreenStackNavigation}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Contact Us"
        component={ContactUsScreen}
        options={{
          headerStyle: {backgroundColor: colors.primaryBackground},
          headerTitleStyle: {color: colors.titles},
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
