import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import colors from '../theme/colors'; // Import the colors from your color scheme

const Section = ({title, content}) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.sectionContent}>{content}</Text>
    </View>
  );
};

const ChildrensClassesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Section
        title="Children's Program"
        content="Strengthen your child's confidence, energy, and spirit while they have fun learning to kick, block, and punch. Your child will improve in academics, have unshakable self-respect, and increase strength and fitness in mind and body. Youngsters also develop the ability to concentrate and listen more closely, respect others more, have good sportsmanship, and make new friendships!"
      />
      <Section
        title="Program Highlights"
        content={
          <>
            {'\u2022'} Belt Promotion Tests.{'\n'}
            {'\u2022'} Annual Taekwondo Championship.{'\n'}
            {'\u2022'} Christmas Party.{'\n'}
            {'\u2022'} Annual Family Picnic.{'\n'}
            {'\u2022'} Junior class awards.
          </>
        }
      />
      <Section
        title="Class Information"
        content="Any student aged 4 - 10 will be considered for our children's classes. Starting in our children's classes, we focus on building leadership skills. Listening to parents, creating healthy successful habits, nutrition, self-confidence, strength training, increasing flexibility, and positive thinking are the main focus of all our programs and are highly reinforced in our children's classes."
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.primaryBackground,
  },
  section: {
    marginBottom: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.sectionHeaders, // Define your border color
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.sectionHeaders,
  },
  sectionContent: {
    fontSize: 16,
    color: colors.descriptions,
  },
});

export default ChildrensClassesScreen;
