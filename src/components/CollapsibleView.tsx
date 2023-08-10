import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Collapsible from 'react-native-collapsible';

const CollapsibleView = ({title, children}) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggle = () => setCollapsed(!collapsed);

  return (
    <View
      style={{
        flex: 0,
        borderWidth: 0.5,
        borderColor: 'gray',
        backgroundColor: 'lightgray',
      }}>
      <TouchableOpacity
        onPress={toggle}
        style={{
          paddingHorizontal: 10,
          paddingVertical: 15,
        }}>
        <Text
          style={{
            fontSize: 20,
          }}>
          {title}
        </Text>
      </TouchableOpacity>
      <Collapsible collapsed={collapsed}>
        <View
          style={{
            flex: 0,
          }}>
          {children}
        </View>
      </Collapsible>
    </View>
  );
};

export default CollapsibleView;
