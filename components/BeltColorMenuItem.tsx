import React from 'react';
import {View} from 'react-native';
import {Card, Button} from 'react-native-paper';

const BeltColorMenuItem = ({item, onPress}) => {
  return (
    <Card style={{margin: 10}}>
      <View style={{alignItems: 'center', padding: 10}}>
        <Button mode="contained" onPress={onPress} style={{minWidth: 150}}>
          {item.displayColor}
        </Button>
      </View>
    </Card>
  );
};

export default BeltColorMenuItem;
