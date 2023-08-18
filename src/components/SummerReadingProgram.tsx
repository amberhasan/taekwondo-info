import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const SummerReadingProgram = () => {
  return (
    <View>
      <Text>
        Our school's Summer Reading Program helps encourage young students to
        read books and write summaries about them to help further their
        understanding.
      </Text>
      <Image
        source={require('../assets/images/homepage/summer_reading_form.png')}
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
export default SummerReadingProgram;
