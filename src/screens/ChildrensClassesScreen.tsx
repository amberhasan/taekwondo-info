import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const ChildrensClassesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Children's Program</Text>
      <Text style={styles.description}>
        Our children's program strengthens confidence, energy, and spirit. While
        having fun learning to kick, block, and punch, your child will realize
        improved academics, unshakable self-respect, and increased strength and
        fitness in mind and body.
      </Text>
      <Text style={styles.description}>
        Youngsters also develop the ability to concentrate and listen more
        closely, respect for others, good sportsmanship, and new friendships!
      </Text>
      <Text style={styles.highlights}>
        ~ Junior class awards and achievement banquet.
        {'\n'}~ Promotion belt test.
        {'\n'}~ Taekwondo championship.
        {'\n'}~ Christmas party.
        {'\n'}~ Family picnic.
      </Text>
      <Text style={styles.callToAction}>~ BE THE BEST YOU CAN BE!</Text>
      <Text style={styles.classInformation}>
        Class Information: Any student aged 4 - 10 will be considered for our
        children's classes.
        {'\n'}Starting in our children's classes, we focus on building
        leadership skills.
        {'\n'}Listening to parents, creating healthy successful habits,
        nutrition, self-confidence, strength training, increasing flexibility,
        and positive thinking are the main focus of all our programs and are
        highly reinforced in our children's classes.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 15,
  },
  highlights: {
    fontSize: 16,
    marginBottom: 15,
    fontStyle: 'italic',
  },
  callToAction: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  classInformation: {
    fontSize: 16,
  },
});

export default ChildrensClassesScreen;
