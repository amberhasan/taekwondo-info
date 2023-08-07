import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GetStartedScreen: React.FC = () => {
  const skillsToBuild = [
    'Positive Attitude',
    'Leadership Skills',
    'Self-Defense Skills',
    'A Healthier Body',
    'Weight Control',
    'Discipline',
    'Character',
    'Concentration',
    'Confidence',
    'Indomitable Spirit',
    'Perseverance',
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>First Learn About What We Teach</Text>
      {skillsToBuild.map((skill, index) => (
        <Text key={index} style={styles.skill}>
          {skill}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  skill: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default GetStartedScreen;
