import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BulletPoint = ({children}) => (
  <View style={styles.bulletPoint}>
    <Text style={styles.bullet}>{'\u2022'}</Text>
    <Text style={styles.bulletText}>{children}</Text>
  </View>
);

const PoomsaeTeamView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        A class meant for students who wish to compete at a state, national, or
        world level! This program is taught by Grandmaster Lee, who has won a
        multitude of tournaments.
      </Text>
      <BulletPoint>
        2018 11th World Championship Silver Medalist in Taiwan
      </BulletPoint>
      <BulletPoint>2018 USA Team Trial 1st Place</BulletPoint>
      <BulletPoint>Many Many More</BulletPoint>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  bulletPoint: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  bullet: {
    marginRight: 8,
    fontSize: 16,
  },
  bulletText: {
    fontSize: 16,
  },
});

export default PoomsaeTeamView;
