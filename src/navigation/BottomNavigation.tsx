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
        tabBarActiveTintColor: colors.darkYellow,
        tabBarInactiveTintColor: colors.veryLightGray,
        tabBarStyle: {
          height: '10%',
          // paddingHorizontal: 5,
          // paddingTop: 0,
          backgroundColor: colors.black,
          // position: 'absolute',
          // borderTopWidth: 0,
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
      <Tab.Screen name="About Us" component={AboutUsScreen} />
      <Tab.Screen
        name="HomeScreenStackNavigation"
        component={HomeScreenStackNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="Contact Us" component={ContactUsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
