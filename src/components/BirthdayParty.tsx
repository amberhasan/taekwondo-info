import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const BirthdayParty = () => {
  return (
    <View>
      <Text>Taekwondo Birthday Party.</Text>
      <Image
        source={require('../assets/images/homepage/birthday_party.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200, // Set the width of the image
    height: 200, // Set the height of the image
    resizeMode: 'cover', // Adjust the image resize mode as needed
    marginBottom: 15,
  },
});
export default BirthdayParty;
