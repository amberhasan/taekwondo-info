import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Button, Text} from 'react-native-paper'; // Import components from react-native-paper
import {useTheme} from '@react-navigation/native'; // This is used to access the theme

const HomeMenuItem = ({title, onPress}) => {
  const {colors} = useTheme(); // Get the theme colors
  const buttonStyle = {
    backgroundColor: colors.primary, // Use the primary theme color as the background
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 8,
  };
  const textStyle = {
    color: colors.surface, // Use the surface color for text
    fontSize: 20,
    fontWeight: 'bold',
  };

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default HomeMenuItem;
