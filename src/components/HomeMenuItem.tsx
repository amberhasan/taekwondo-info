import React from 'react';
import {TouchableOpacity, View, Text, ImageBackground} from 'react-native';
import {rgbaColor} from 'react-native-reanimated';

const HomeMenuItem = ({data, onPress}) => {
  const {image, title, description, id} = data;
  return (
    <TouchableOpacity
      onPress={() => onPress(id)}
      activeOpacity={0.5}
      style={{
        height: 100,
        flex: 1,
        borderWidth: 0.5,
        borderColor: 'black',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        overflow: 'hidden',
      }}>
      <ImageBackground source={image} style={{height: '100%', width: '100%'}}>
        <View
          style={{
            backgroundColor: 'rgba(33, 37, 41, 0.3)',
            padding: 8,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            width: '80%',
            alignSelf: 'center',
            borderColor: 'white', // Set the border color to white
            borderWidth: 2, // Set the border width
          }}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
            }}>
            {title}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default HomeMenuItem;
