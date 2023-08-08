import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Alert, FlatList} from 'react-native';
import axios from 'axios';

const BeltColorsMenuScreen = () => {
  const [belts, setBelts] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:3000/belts')
      .then(response => {
        setBelts(response.data);
        console.log('Got data', response.data);
      })
      .catch(error => {
        Alert.alert('Error', error.message);
      });
  }, []);

  return (
    <FlatList
      data={belts}
      keyExtractor={item => item.id}
      renderItem={({item}) => {
        return (
          <View>
            <Text>{item.displayColor}</Text>
          </View>
        );
      }}
    />
  );
};

export default BeltColorsMenuScreen;
