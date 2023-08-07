import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import axios from 'axios';

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

const HomeScreen = () => {
  const [menu, setMenu] = useState([]);
  const [error, setError] = useState('');

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
      title: string;
      description: string;
      image: string;
    };
  }) => {
    return (
      <TouchableOpacity style={styles.categoryButton}>
        <Text style={styles.categoryText}>{item.title}</Text>
        <Text style={styles.categoryText}>{item.description}</Text>
        <Text style={styles.categoryText}>{item.image}</Text>
      </TouchableOpacity>
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
