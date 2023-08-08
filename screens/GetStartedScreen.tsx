import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

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

  const rules = [
    'Please arrive 10 minutes before class time.',
    'Stretch quietly while waiting for class to begin.',
    'Yellow belt and up = Sparring Gear is required for protection.',
    'Keep body, hair and uniform clean and presentable.',
    'Always be respectful and courteous to others.',
  ];

  const summerSpecial = `Summer Special!\n$99 For 5-Weeks of Taekwondo With A Free Uniform\n\n2 Classes Per Week\nFREE Uniform!\nOnly $99!\n5 Weeks of Taekwondo Classes`;

  const halfLength = Math.ceil(skillsToBuild.length / 2);
  const firstColumn = skillsToBuild.slice(0, halfLength);
  const secondColumn = skillsToBuild.slice(halfLength);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.outerBorder}>
        <Text style={styles.header}>First Learn About What We Teach</Text>
        <View style={styles.columnsContainer}>
          <View style={styles.column}>
            {firstColumn.map((skill, index) => (
              <Text key={index} style={styles.skill}>
                &bull; {skill}
              </Text>
            ))}
          </View>
          <View style={styles.column}>
            {secondColumn.map((skill, index) => (
              <Text key={index} style={styles.skill}>
                &bull; {skill}
              </Text>
            ))}
          </View>
        </View>
      </View>
      <View style={styles.summerSpecialBorder}>
        <Text style={styles.summerSpecial}>{summerSpecial}</Text>
      </View>
      <View style={styles.rulesBorder}>
        <Text style={styles.rulesHeader}>SCHOOL RULES:</Text>
        {rules.map((rule, index) => (
          <Text key={index} style={styles.rule}>
            - {rule}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  outerBorder: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  columnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
    paddingHorizontal: 8,
  },
  skill: {
    fontSize: 16,
    marginBottom: 8,
  },
  rulesBorder: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  rulesHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  rule: {
    fontSize: 16,
    marginBottom: 8,
  },
  summerSpecialBorder: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
  },
  summerSpecial: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default GetStartedScreen;
