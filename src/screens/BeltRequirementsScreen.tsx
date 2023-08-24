import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

interface Belt {
  name: string;
  id: string;
  image: any; // Add the image property
}

const BeltRequirementsScreen = () => {
  const navigation = useNavigation();

  const beltData = [
    {
      name: 'White Belt',
      id: 'white',
      image: require('../assets/images/belts/white.png'),
    },
    {
      name: 'White Yellow-Stripe Belt',
      id: 'white_yellow_stripe',
      image: require('../assets/images/belts/white_yellow_stripe.png'),
    },
    {
      name: 'Yellow Belt',
      id: 'yellow',
      image: require('../assets/images/belts/yellow.png'),
    },
    {
      name: 'Yellow Green-Stripe Belt',
      id: 'yellow_green_stripe',
      image: require('../assets/images/belts/yellow_green_stripe.png'),
    },
    {
      name: 'Green Belt',
      id: 'green',
      image: require('../assets/images/belts/green.png'),
    },
    {
      name: 'Green Blue-Stripe Belt',
      id: 'green_blue_stripe',
      image: require('../assets/images/belts/green_blue_stripe.png'),
    },
    {
      name: 'Blue Belt',
      id: 'blue',
      image: require('../assets/images/belts/blue.png'),
    },
    {
      name: 'Blue Red-Stripe Belt',
      id: 'blue_red_stripe',
      image: require('../assets/images/belts/blue_red_stripe.png'),
    },
    {
      name: 'Red Belt',
      id: 'red',
      image: require('../assets/images/belts/red.png'),
    },
    {
      name: '1st Dan Black Belt',
      id: 'first_dan_evaluation',
      image: require('../assets/images/belts/black.png'),
    },
  ];

  const handleBeltPress = (belt: Belt) => {
    navigation.navigate('BeltDetailsScreen', {
      id: belt.id,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {beltData.map((belt, index) => (
        <TouchableOpacity
          style={[styles.row, {backgroundColor: '#2E86C1'}]} // Blue background color
          key={index}
          onPress={() => handleBeltPress(belt)}>
          <Image source={belt.image} style={styles.beltImage} />
          <Text style={styles.beltText}>{belt.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F4F8',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    width: '100%',
    marginVertical: 4,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  beltImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  beltText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 16,
  },
});

export default BeltRequirementsScreen;
