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
import useBeltRequirementsController from '../hooks/useBeltRequirementsController';

interface Belt {
  name: string;
  id: string;
  image: any; // Add the image property
}

const BeltRequirementsScreen = () => {
  const navigation = useNavigation();

  const {beltData} = useBeltRequirementsController();

  const handleBeltPress = (belt: Belt) => {
    navigation.navigate('BeltDetailsScreen', {
      id: belt.id,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {beltData.map((belt, index) => (
        <TouchableOpacity
          style={[styles.row]} // Gray background color
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
    backgroundColor: '#D3D3D3',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: '10%', // Added padding on the sides
    width: '100%',
    marginVertical: 4,
    borderRadius: 12,
    elevation: 2,
    backgroundColor: '#F9F9F9',
    borderColor: '#E5E5E5',
    borderWidth: 1,
  },
  beltImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  beltText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333', // Dark gray text color
    marginLeft: 16,
  },
});

export default BeltRequirementsScreen;
