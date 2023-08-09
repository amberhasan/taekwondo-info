import React from 'react';
import {View, Text, FlatList, Alert} from 'react-native';
import GettingStarted from '../components/GettingStarted';
import HomeMenuItem from '../components/HomeMenuItem';

const menu = [
  {
    id: 1,
    title: "Children's Classes",
    description:
      'Classes for children 10 and under who want to learn Taekwondo',
    image: require('../assets/images/homepage/childrens_classes.png'),
  },
  {
    id: 2,
    title: 'Adult/Teen Classes',
    description:
      'Classes for teens and adults 11-65+ who want to learn Taekwondo',
    image: require('../assets/images/homepage/adult_teen_classes.png'),
  },
  {
    id: 3,
    title: 'Demo Team',
    description: "Our Taekwondo school's demonstration team",
    image: require('../assets/images/homepage/demo_team.png'),
  },
  {
    id: 4,
    title: 'Poomsae Team',
    description:
      'For students with the desire to compete at a professional level',
    image: require('../assets/images/homepage/poomsae_team.png'),
  },
  {
    id: 5,
    title: 'Our School Championship',
    description: "Our Taekwondo school's yearly competition",
    image: require('../assets/images/homepage/school_championship.png'),
  },
  {
    id: 6,
    title: 'Summer Reading Program',
    description: 'Learn about the program and download the reading log',
    image: require('../assets/images/homepage/summer_reading.png'),
  },
  {
    id: 7,
    title: 'Birthday Parties',
    description: 'Learn more about having a birthday party with Taekwondo',
    image: require('../assets/images/homepage/birthday_parties.png'),
  },
  {
    id: 8,
    title: 'Belt Requirements',
    description: 'For current students',
    image: require('../assets/images/homepage/childrens_classes.png'),
  },
];

const HomeScreen = () => {
  const onMenuPress = id => {
    Alert.alert('ID', id.toString());
  };
  return (
    <View style={{flex: 1}}>
      <Text>HomeScreen</Text>
      {/*  */}
      <FlatList
        style={{flex: 1}}
        numColumns={2}
        data={menu}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={() => <GettingStarted />}
        renderItem={({item}) => (
          <HomeMenuItem data={item} onPress={onMenuPress} />
        )}
      />
    </View>
  );
};

export default HomeScreen;
