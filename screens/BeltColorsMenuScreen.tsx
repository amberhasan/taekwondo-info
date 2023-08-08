import React, {useState, useEffect} from 'react';
import {View, Alert, FlatList} from 'react-native';
import axios from 'axios';
import BeltColorMenuItem from '../components/BeltColorMenuItem'; // Update the path accordingly
import WhiteBeltScreen from './BeltScreen'; // Adjust the path as needed

const BeltColorsMenuScreen = props => {
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

  const handleItemPress = item => {
    props.navigation.navigate('BeltScreen', {beltId: item.id});
  };

  return (
    <FlatList
      data={belts}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <BeltColorMenuItem item={item} onPress={() => handleItemPress(item)} />
      )}
    />
  );
};

export default BeltColorsMenuScreen;
