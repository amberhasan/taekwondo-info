import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Collapsible from 'react-native-collapsible';
import colors from '../theme/colors';

const CollapsibleView = ({title, children}) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggle = () => setCollapsed(!collapsed);

  return (
    <View
      style={{
        flex: 0,
        borderWidth: 0.3,
        borderColor: colors.lightGray,
        backgroundColor: colors.black,
        elevation: 5, // Apply a shadow effect
        shadowColor: colors.darkYellow, // Use Dark Yellow for shadow color
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        padding: 20,
        borderRadius: 10,
      }}>
      <TouchableOpacity
        onPress={toggle}
        style={
          {
            // paddingHorizontal: 10,
            // paddingVertical: 15,
          }
        }>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '500',
            color: colors.darkYellow,
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
