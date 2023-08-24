import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  Text,
  Modal,
  TouchableOpacity,
} from 'react-native';
import ModalView from './ModalView';
import colors from '../theme/colors';

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
        overflow: 'hidden',
      }}>
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}>
          <ModalView style={{color: 'white', fontSize: 20}}>
            <Text>
              Try our $99 5-week Back To School Special!* It is a 5 week Back To
              School Special for new students to try Taekwondo out! *Offer for
              new students only
            </Text>
          </ModalView>
          <TouchableOpacity onPress={closeModal} style={{marginTop: 20}}>
            <Text style={{color: 'white', fontSize: 16}}>Close Modal</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
                color: colors.white,
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 5,
              }}>
              Get Started
            </Text>
            <Text
              style={{
                color: colors.white,
                fontSize: 14,
              }}>
              Try our special!
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default GettingStarted;
