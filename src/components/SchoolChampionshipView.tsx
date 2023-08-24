import React from 'react';
import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';

const SchoolChampionshipView = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.description}>
          Our Yearly Taekwondo Championship allows students to compete against
          others and prove their skill gaining rewards and confidence in the
          process. Black Belts have the opportunity to compete for the ultimate
          prize of a 6 ft trophy and the title of Grand Champion. Students are
          also able to compete in:
        </Text>
        <Text style={styles.bulletPoint}>- Sparing</Text>
        <Text style={styles.bulletPoint}>- Poomsae</Text>
        <Text style={styles.bulletPoint}>- Board Breaking</Text>
        <Text style={styles.bulletPoint}>- And MUCH MORE!</Text>
        <Text style={styles.description}>
          This event is fun and a great experience for all ages!!!
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
    textAlign: 'center',
  },
  bulletPoint: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 15,
  },
});

export default SchoolChampionshipView;
