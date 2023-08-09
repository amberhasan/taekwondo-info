import React from 'react';
import {View, ImageBackground, Text} from 'react-native';

const GettingStarted = () => {
  return (
    <View
      style={{
        height: 150,
        borderRadius: 10,
        margin: 10,
        overflow: 'hidden', // Ensure rounded corners are applied
      }}>
      <ImageBackground
        source={require('../assets/images/homepage/getting_started.png')}
        style={{
          height: 150,
          width: '100%',
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(33, 37, 41, 0.6)',
            padding: 10,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: 'bold',
              marginBottom: 5,
            }}>
            Get Started
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 14,
            }}>
            Try our special!
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default GettingStarted;
