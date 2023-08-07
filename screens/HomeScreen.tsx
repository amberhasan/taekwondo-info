import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';

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

const HomeScreen: React.FC = () => {
  const renderCategoryItem = ({item}: {item: string}) => {
    return (
      <TouchableOpacity style={styles.categoryButton}>
        <Text style={styles.categoryText}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* If you have other content in your HomeScreen, you can add it here */}
      {/* Otherwise, you can directly use the FlatList */}
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={item => item}
        contentContainerStyle={styles.categoriesContainer}
      />
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
