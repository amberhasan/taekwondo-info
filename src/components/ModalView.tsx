import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import colors from '../theme/colors'; // Import the colors from your color scheme

const ModalView = props => {
  return (
    <View>
      <Modal isVisible={props.isVisible}>
        <View
          style={{
            flex: 0,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.white,
            padding: 10,
            borderRadius: 10,
          }}>
          {props.children}
          <TouchableOpacity
            onPress={() => props.setIsVisible(false)}
            style={{
              marginTop: 10,
              backgroundColor: colors.yellow,
              paddingVertical: 8,
              paddingHorizontal: 20,
              borderRadius: 5,
            }}>
            <Text style={{color: colors.black, fontWeight: 'bold'}}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default ModalView;
