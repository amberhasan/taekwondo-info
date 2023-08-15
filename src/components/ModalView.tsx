import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';

const ModalView = props => {
  return (
    <View>
      <Modal isVisible={props.isVisible}>
        <View
          style={{
            flex: 0,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 10,
          }}>
          {props.children}
          <TouchableOpacity onPress={() => props.setIsVisible(false)}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default ModalView;
