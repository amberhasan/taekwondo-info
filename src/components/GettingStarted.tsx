import React from 'react';
import {View, ImageBackground, Text} from 'react-native';

const GettingStarted = () => {
  return (
    <View
      style={{
        height: 150,
        padding: 5,
        borderRadius: 5,
        margin: 10,
      }}>
      <View
        style={{
          flex: 1,
          borderRadius: 5,
        }}>
        <ImageBackground
          source={require('../assets/images/homepage/getting_started.png')}
          style={{
            height: 150,
            width: '100%',
          }}>
          <View style={{flex: 1, backgroundColor: 'rgba(33, 37, 41, 0.6)'}}>
            <Text
              style={{
                color: 'white',
              }}>
              title
            </Text>
            <Text
              style={{
                color: 'white',
              }}>
              description
            </Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default GettingStarted;
