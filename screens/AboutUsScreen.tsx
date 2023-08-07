import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import {SegmentedButtons} from 'react-native-paper';

const AboutUsScreen: React.FC = () => {
  const [value, setValue] = React.useState('');

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <SegmentedButtons
          value={value}
          onValueChange={setValue}
          buttons={[
            {
              value: 'about_us',
              label: 'About Us',
            },
            {
              value: 'about_school',
              label: 'About Our School',
            },
          ]}
        />
        <View style={styles.carousel}>
          <Swiper showsButtons={true}>
            <View style={styles.imageContainer}>
              <Image
                source={require('../assets/images/about_us/grandmaster_lee.png')}
                style={styles.carouselImage}
              />
            </View>
            <View style={styles.imageContainer}>
              <Image
                source={require('../assets/images/about_us/medal_grandmaster_lee.png')}
                style={styles.carouselImage}
              />
            </View>
            <View style={styles.imageContainer}>
              <Image
                source={require('../assets/images/about_us/27th_open_grandmaster_lee.png')}
                style={styles.carouselImage}
              />
            </View>
            <View style={styles.imageContainer}>
              <Image
                source={require('../assets/images/about_us/grandmaster_lee_poomsae.png')}
                style={styles.carouselImage}
              />
            </View>
            <View style={styles.imageContainer}>
              <Image
                source={require('../assets/images/about_us/2018_grandmaster_lee.png')}
                style={styles.carouselImage}
              />
            </View>
          </Swiper>
        </View>
        <View style={styles.aboutTextContainer}>
          <Text style={styles.aboutText}>
            Grandmaster Lee (President & Founder) is the head instructor at
            Lee's U.S. Taekwondo Academy. He is a WTF certified 8th Dan Black
            Belt with over 35 years of experience of teaching and practicing
            Taekwondo. Master Lee founded Lee's U.S. Taekwondo Academy in 2004
            and over 1000 students, children & adults, have passed through this
            school with over 100 students earning their Black Belts.
          </Text>
          <Text style={styles.aboutText}>Top Achievements:</Text>
          <Text style={styles.aboutText}>
            - 2018 11th WTF World Championship Silver Medalist
          </Text>
          <Text style={styles.aboutText}>
            - 2020 WTF World Championship Bronze Medalist
          </Text>
          <Text style={styles.aboutText}>
            - 2015 - 2020 Member of TeamUSA Taekwondo
          </Text>
          <Text style={styles.aboutText}>
            - 2021 Pan Am & European Championship Gold Medalist
          </Text>
          <Text style={styles.aboutText}>
            - 2021 AAU Taekwondo Gold Medalist
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    // Your existing container styles
  },
  carousel: {
    height: 400,
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  aboutTextContainer: {
    padding: 20,
  },
  aboutText: {
    marginBottom: 10,
    fontSize: 16,
  },
  imageContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AboutUsScreen;
