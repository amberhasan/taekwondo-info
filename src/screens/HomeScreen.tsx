import React, {useState} from 'react';
import {View, Text, FlatList, Alert, StatusBar} from 'react-native';
import GettingStarted from '../components/GettingStarted';
import HomeMenuItem from '../components/HomeMenuItem';
import ModalView from '../components/ModalView';
import AdultTeenClassesView from '../components/AdultTeenClassesView';
import DemoTeamView from '../components/DemoTeamView';
import PoomsaeTeamView from '../components/PoomsaeTeamView';
import SchoolChampionshipView from '../components/SchoolChampionshipView';
import SummerReadingProgram from '../components/SummerReadingProgram';
import BirthdayParty from '../components/BirthdayParty';
import colors from '../theme/colors';

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

const HomeScreen = props => {
  let [isVisible, setIsVisible] = useState(false);
  let [id, setId] = useState(1);
  const onMenuPress = id => {
    setId(id);
    switch (id) {
      case 1:
        props.navigation.navigate('ChildrensClassesScreen');
        break;
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        setIsVisible(true);
        break;
      case 8:
        props.navigation.navigate('BeltRequirementsScreen');
        break;
      default:
        Alert.alert('Error', `${id} is not handled yet`);
    }
  };

  const showView = id => {
    switch (id) {
      case 2:
        return <AdultTeenClassesView />;
      case 3:
        return <DemoTeamView />;
      case 4:
        return <PoomsaeTeamView />;
      case 5:
        return <SchoolChampionshipView />;
      case 6:
        return <SummerReadingProgram />;
      case 7:
        return <BirthdayParty />;
      default:
        return null;
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: colors.black}}>
      <StatusBar barStyle={'light-content'} />
      <ModalView isVisible={isVisible} setIsVisible={setIsVisible}>
        {showView(id)}
      </ModalView>
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
