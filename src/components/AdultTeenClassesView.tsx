import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const AdultTeenClassesView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        Classes for teens and adults ranging from 11 to 65 years and older!
      </Text>
      <Text style={styles.description}>
        Any student aged 10+ will be considered for our adult classes where we
        focus on self-improvement. It doesn't matter what your age or experience
        level is; you can join our adult class as a beginner, intermediate, or
        advanced level practitioner.
      </Text>
      <Text style={styles.description}>
        Tae Kwon Do and the martial arts are a way of life, and that's precisely
        what we teach in our adult class. Meditation, nutrition, flexibility,
        strength, focus, self-discipline, positive thinking, erasing bad habits,
        and creating healthier and more successful habits are the cornerstones
        of our teaching in the adult class.
      </Text>
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
});

export default AdultTeenClassesView;
