import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const DemoTeamView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        The Demo Team is a dedicated group of students who showcase their skills
        while also learning new ones. Our students seize the opportunity to
        perform at special events such as the Plano Balloon Fest and Asia Fest,
        all while having a blast!
      </Text>
      <Image
        source={require('../assets/images/homepage/demo_team_view_1.png')}
        style={styles.image}
      />
      <Image
        source={require('../assets/images/homepage/demo_team_view_2.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 15,
  },
  image: {
    width: 200, // Set the width of the image
    height: 200, // Set the height of the image
    resizeMode: 'cover', // Adjust the image resize mode as needed
    marginBottom: 15,
  },
});

export default DemoTeamView;
