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
import useHomeScreenDataController from '../hooks/useHomeScreenDataController';
import {useSelector} from 'react-redux';

const VIEWS = [
  <GettingStarted />,
  <AdultTeenClassesView />,
  <DemoTeamView />,
  <PoomsaeTeamView />,
  <SchoolChampionshipView />,
  <SummerReadingProgram />,
  <BirthdayParty />,
];

const HomeScreen = props => {
  const {menu, isVisible, setIsVisible, id, setId, onMenuPress} =
    useHomeScreenDataController();

  const value = useSelector(state => state.value);
  // console.log('I am state from the UI', value);
  console.log('Render');

  return (
    <View style={{flex: 1, backgroundColor: colors.primaryBackground}}>
      <StatusBar barStyle={'dark-content'} />
      <ModalView isVisible={isVisible} setIsVisible={setIsVisible}>
        {VIEWS[id - 1]}
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
