import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';

const DemoTeamView = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.description}>
          The Demo Team is a dedicated group of students who showcase their
          skills while also learning new ones. Our students seize the
          opportunity to perform at special events such as the Plano Balloon
          Fest and Asia Fest, all while having a blast!
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center', // Center align the text
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 15,
  },
});

export default DemoTeamView;
