import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const SchoolChampionshipView = () => {
  return (
    <View>
      <Text>
        Our Yearly Taekwondo Championship allows students to compete against
        others and prove their skill gaining rewards and confidence in the
        process. Black Belts have the opportnity to compete for the ultimate
        prize of a 6 ft trophy and the title of Grand Champion. Students are
        also able to compete in: -Sparing -Poomsae -Board Breaking -And MUCH
        MORE! This event is fun and a great experience for all ages!!!
      </Text>
      <Image
        source={require('../assets/images/homepage/school_championship_1.png')}
        style={styles.image}
      />
      <Image
        source={require('../assets/images/homepage/school_championship_2.png')}
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
export default SchoolChampionshipView;
