import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import colors from '../theme/colors'; // Import the colors from the first code snippet

const ContactUsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 33.071773349668476,
            longitude: -96.75261643681985,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{
              latitude: 33.071773349668476,
              longitude: -96.75261643681985,
            }}
            title={"Lee's US Taekwondo"}
            description={'Our Taekwondo Location'}
          />
        </MapView>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Contact Info</Text>
        <Text style={styles.infoText}>Email: Use Contact Form!</Text>
        <Text style={styles.infoText}>Website: leesustaekwondo.com</Text>
        <Text style={styles.infoText}>Phone: +1 (972) 208-8504</Text>
        <Text style={styles.infoText}>Facebook Page</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Address</Text>
        <Text style={styles.infoText}>6921 Independence Pkwy. #160</Text>
        <Text style={styles.infoText}>Plano, TX 75023</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Business Hours</Text>
        <Text style={styles.infoText}>Mon, Wed:</Text>
        <Text style={styles.infoText}>1:45 PM - 9:00 PM</Text>
        <Text style={styles.infoText}>Tues, Thur:</Text>
        <Text style={styles.infoText}>9:30 AM - 11:00 AM</Text>
        <Text style={styles.infoText}>1:45 PM - 9:00 PM</Text>
        <Text style={styles.infoText}>Fri:</Text>
        <Text style={styles.infoText}>1:45 PM - 7:30 PM</Text>
        <Text style={styles.infoText}>Sat:</Text>
        <Text style={styles.infoText}>9:00 AM - 1:00 PM</Text>
        <Text style={styles.infoText}>Closed Sunday</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.black,
  },
  section: {
    backgroundColor: colors.lightGray,
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  map: {
    height: 300,
    width: '100%',
    borderRadius: 10,
    marginBottom: 10,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.black,
  },
  infoText: {
    marginBottom: 5,
    color: colors.lightYellow,
  },
});

export default ContactUsScreen;
