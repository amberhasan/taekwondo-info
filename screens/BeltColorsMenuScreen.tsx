import React, {useState, useEffect} from 'react';
import {View, Alert, FlatList} from 'react-native';
import axios from 'axios';
import BeltColorMenuItem from '../components/BeltColorMenuItem'; // Update the path accordingly
import WhiteBeltScreen from './belt_screens/WhiteBeltScreen'; // Adjust the path as needed

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
    // Implement navigation or any other action you want to perform on item press
    // For navigation, you can use libraries like React Navigation
    // For now, let's just log the item's color
    console.log('Pressed item:', item.displayColor);
    switch (item.id) {
      case 1:
        props.navigation.navigate('WhiteBeltScreen');
        break;
      case 2:
        props.navigation.navigate('WhiteBeltScreen');
        break;
      case 3:
        props.navigation.navigate('BeltRequirements');
        break;
      case 4:
        props.navigation.navigate('BeltRequirements');
        break;
      case 5:
        props.navigation.navigate('BeltRequirements');
        break;
      case 6:
        props.navigation.navigate('BeltRequirements');
        break;
      case 7:
        props.navigation.navigate('BeltRequirements');
        break;
      case 8:
        props.navigation.navigate('BeltRequirements');
        break;
      case 9:
        props.navigation.navigate('BeltRequirements');
        break;
    }
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
