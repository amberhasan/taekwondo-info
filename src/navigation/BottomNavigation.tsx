import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the icon library you prefer
import HomeScreen from '../screens/HomeScreen';
import ContactUsScreen from '../screens/ContactUsScreen';
import AboutUsScreen from '../screens/AboutUsScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
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
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="Contact Us" component={ContactUsScreen} />
      <Tab.Screen name="About Us" component={AboutUsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
