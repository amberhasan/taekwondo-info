import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';

const categoriesData = [
  {
    title: 'Our Special',
    image: require('../assets/images/about_us/grandmaster_lee.png'),
  },
  {
    title: "Children's Classes",
    image: require('../assets/images/about_us/grandmaster_lee.png'),
  },
  {
    title: 'Our Special',
    image: require('../assets/images/about_us/grandmaster_lee.png'),
  },
  {
    title: "Children's Classes",
    image: require('../assets/images/about_us/grandmaster_lee.png'),
  },
  {
    title: 'Our Special',
    image: require('../assets/images/about_us/grandmaster_lee.png'),
  },
  {
    title: "Children's Classes",
    image: require('../assets/images/about_us/grandmaster_lee.png'),
  },
  {
    title: 'Our Special',
    image: require('../assets/images/about_us/grandmaster_lee.png'),
  },
  {
    title: "Children's Classes",
    image: require('../assets/images/about_us/grandmaster_lee.png'),
  },

  // Add more categories and images here
];
const chunkArray = (array, chunkSize) => {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunkedArray.push(array.slice(i, i + chunkSize));
  }
  return chunkedArray;
};

const HomeScreen: React.FC = () => {
  const chunkedCategories = chunkArray(categoriesData, 2); // Group categories into rows of 2

  const renderCategoryItem = ({item}: {item: {title: string; image: any}}) => {
    return (
      <TouchableOpacity style={styles.categoryButton}>
        <Image source={item.image} style={styles.categoryImage} />
        <Text style={styles.categoryText}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {chunkedCategories.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map(category => (
            <React.Fragment key={category.title}>
              {renderCategoryItem({item: category})}
            </React.Fragment>
          ))}
        </View>
      ))}
      <View style={styles.fullWidthRow}>
        {renderCategoryItem({item: categoriesData[7]})}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  fullWidthRow: {
    marginBottom: 10,
  },
  categoryButton: {
    backgroundColor: 'blue',
    width: '48%', // Adjust the width to fit two buttons in a row
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 8,
    overflow: 'hidden',
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0.5,
  },
  categoryText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    zIndex: 1,
  },
});

export default HomeScreen;
