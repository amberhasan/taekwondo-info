import React from 'react';
import {View, Text} from 'react-native';

const BeltScreen = ({route}) => {
  const {beltId} = route.params;

  // Now you can use the beltId to retrieve data or perform any actions specific to the selected belt

  return (
    <View>
      <Text>Belt ID: {beltId}</Text>
      {/* Other components and content */}
    </View>
  );
};

export default BeltScreen;
