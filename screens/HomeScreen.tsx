import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import axios from 'axios';
import HomeMenuItem from '../components/HomeMenuItem';

const categories = [
  'Our Special',
  "Children's Classes",
  'Adult Classes',
  'Demo Team',
  'Poomsae Team',
  'Our School Championship',
  'Summer Program',
  'Birthday Parties',
  'Belt Requirements',
];

const HomeScreen = props => {
  const [menu, setMenu] = useState([]);
  const [error, setError] = useState('');

  const onMenuPress = (id: number) => {
    switch (id) {
      case 1:
        props.navigation.navigate('BeltRequirements');
        break;
      case 2:
        props.navigation.navigate('BeltRequirements');
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

  useEffect(() => {
    axios
      .get('http://127.0.0.1:3000/menu')
      .then(result => {
        console.log('result', result.data);
        setMenu(result.data);
        setError('');
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  const renderCategoryItem = ({
    item,
  }: {
    item: {
      id: number;
      title: string;
      description: string;
      image: string;
    };
  }) => {
    return (
      <HomeMenuItem
        title={item.title}
        onPress={() => {
          onMenuPress(item.id);
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      {error ? (
        <Text>{error}</Text>
      ) : (
        <FlatList
          data={menu}
          renderItem={renderCategoryItem}
          keyExtractor={item => item.title}
          contentContainerStyle={styles.categoriesContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  categoriesContainer: {
    flexGrow: 1,
    justifyContent: 'space-evenly',
  },
  categoryButton: {
    backgroundColor: 'blue', // Customize the button background color
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 8,
  },
  categoryText: {
    color: 'white', // Customize the text color
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
