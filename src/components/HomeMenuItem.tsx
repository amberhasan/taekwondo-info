import React from 'react';
import {TouchableOpacity, View, Text, ImageBackground} from 'react-native';
import {rgbaColor} from 'react-native-reanimated';
import colors from '../theme/colors';

const HomeMenuItem = ({data, onPress}) => {
  const {image, title, description, id} = data;
  return (
    <TouchableOpacity
      onPress={() => onPress(id)}
      activeOpacity={0.5}
      style={{
        height: 120,
        flex: 1,
        borderWidth: 0.5,
        borderColor: 'black',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 5, // Apply a shadow effect
        shadowColor: colors.black, // Use Dark Yellow for shadow color
        shadowOffset: {
          width: 10,
          height: 10,
        },
        // shadowOpacity: 0.3,
        shadowRadius: 4,
      }}>
      <ImageBackground source={image} style={{height: '100%', width: '100%'}}>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <View
            style={{
              backgroundColor: 'rgba(33, 37, 41, 0.5)',
              padding: 6,
              // flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'stretch',
            }}>
            <Text
              style={{
                color: colors.white,
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              {title}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default HomeMenuItem;
