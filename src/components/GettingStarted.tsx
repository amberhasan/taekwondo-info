import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  Text,
  Modal,
  TouchableOpacity,
} from 'react-native';
import ModalView from './ModalView';

const GettingStarted = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View
      style={{
        height: 150,
        borderRadius: 10,
        margin: 10,
        overflow: 'hidden', // Ensure rounded corners are applied
      }}>
      <TouchableOpacity onPress={handlePress}>
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
              alignItems: 'center',
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
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}>
          <ModalView style={{color: 'white', fontSize: 20}}>
            <Text>This is the modal content.</Text>
          </ModalView>
          <TouchableOpacity onPress={closeModal} style={{marginTop: 20}}>
            <Text style={{color: 'white', fontSize: 16}}>Close Modal</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default GettingStarted;
