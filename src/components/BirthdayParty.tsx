import React, {useState} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const BirthdayParty = () => {
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  const toggleImageSize = () => {
    setIsImageExpanded(!isImageExpanded);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Taekwondo Birthday Party.</Text>
      <TouchableOpacity onPress={toggleImageSize}>
        <Image
          source={require('../assets/images/homepage/birthday_party.png')}
          style={[styles.image, isImageExpanded && styles.expandedImage]}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 15,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 15,
  },
  expandedImage: {
    width: 300, // Set the expanded width of the image
    height: 300, // Set the expanded height of the image
  },
});

export default BirthdayParty;
