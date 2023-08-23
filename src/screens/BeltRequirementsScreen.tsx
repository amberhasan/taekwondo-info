import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const BeltRequirementsScreen = () => {
  const navigation = useNavigation();

  const beltData = [
    {name: 'White Belt', color: '#000000'},
    {name: 'White Yellow-Stripe Belt', color: '#000000'},
    {name: 'Yellow Belt', color: '#FFFF00'},
    {name: 'Yellow Green-Stripe Belt', color: '#FFFF00'},
    {name: 'Green Belt', color: '#008000'},
    {name: 'Green Blue-Stripe Belt', color: '#008000'},
    {name: 'Blue Belt', color: '#0000FF'},
    {name: 'Blue Red-Stripe Belt', color: '#0000FF'},
    {name: 'Red Belt', color: '#FF0000'},
    {name: 'Red Black-Stripe Belt', color: '#FF0000'},
    {name: '1st Dan Black Belt', color: '#000000'},
    {name: '2nd Dan Black Belt', color: '#000000'},
    {name: '3rd Dan Black Belt', color: '#000000'},
    {name: '4th Dan Black Belt', color: '#000000'},
    {name: '5th Dan Black Belt', color: '#000000'},
  ];

  const handleBeltPress = () => {
    navigation.navigate('BeltDetailsScreen');
  };

  return (
    <View style={styles.container}>
      {beltData.map((belt, index) => (
        <TouchableOpacity
          style={[styles.row, {backgroundColor: belt.color}]}
          key={index}
          onPress={() => handleBeltPress()}>
          <Text style={styles.beltText}>{belt.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    width: '100%',
  },
  beltText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white', // Set text color to white for better visibility
    marginLeft: 10,
  },
});

export default BeltRequirementsScreen;
