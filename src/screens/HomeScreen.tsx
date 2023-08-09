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
    image: 'https://leesustaekwondo.com/assets/img/homepage/hp13.webp',
  },
  {
    id: 2,
    title: 'Adult/Teen Classes',
    description:
      'Classes for teens and adults 11-65+ who want to learn Taekwondo',
    image: 'https://leesustaekwondo.com/assets/img/homepage/hp14.webp',
  },
  {
    id: 3,
    title: 'Demo Team',
    description: "Our Taekwondo school's demonstration team",
    image: 'https://leesustaekwondo.com/assets/img/homepage/hp12.webp',
  },
  {
    id: 4,
    title: 'Poomsae Team',
    description:
      'For students with the desire to compete at a professional level',
    image: 'https://leesustaekwondo.com/assets/img/homepage/hp16.webp',
  },
  {
    id: 5,
    title: 'Our School Championship',
    description: "Our Taekwondo school's yearly competition",
    image: 'https://leesustaekwondo.com/assets/img/homepage/hp11.webp',
  },
  {
    id: 6,
    title: 'Summer Reading Program',
    description: 'Learn about the program and download the reading log',
    image: 'https://leesustaekwondo.com/assets/img/homepage/hpread.webp',
  },
  {
    id: 7,
    title: 'Birthday Parties',
    description: 'Learn more about having a birthday party with Taekwondo',
    image: 'https://leesustaekwondo.com/assets/img/homepage/hp15.webp',
  },
  {
    id: 8,
    title: 'Belt Requirements',
    description: 'For current students',
    image: 'https://leesustaekwondo.com/assets/img/homepage/hp13.webp',
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
