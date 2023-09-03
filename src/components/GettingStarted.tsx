import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  Text,
  Modal,
  TouchableOpacity,
} from 'react-native';
// import ModalView from './ModalView';
import colors from '../theme/colors';
import ModalView from './ModalView';

const GettingStarted = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    setModalVisible(true);
  };

  return (
    <View
      style={{
        height: 100,
        borderRadius: 10,
        margin: 10,
        overflow: 'hidden',
      }}>
      <TouchableOpacity onPress={handlePress}>
        <ImageBackground
          source={require('../assets/images/homepage/getting_started.png')}
          style={{
            height: 100,
            width: '100%',
          }}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(33, 37, 41, 0.6)',
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: colors.primaryBackground,
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 5,
              }}>
              Get Started
            </Text>
            <Text
              style={{
                color: colors.primaryBackground,
                fontSize: 14,
              }}>
              Try our special!
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <ModalView isVisible={modalVisible} setIsVisible={setModalVisible}>
        <View>
          <Text>Hello</Text>
        </View>
      </ModalView>
    </View>
  );
};

export default GettingStarted;
