import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import MapView from 'react-native-maps';

const ContactUsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionHeader}>Contact Info</Text>
      <Text style={styles.infoText}>Email: Use Contact Form!</Text>
      <Text style={styles.infoText}>Website: leesustaekwondo.com</Text>
      <Text style={styles.infoText}>Phone: +1 (972) 208-8504</Text>
      <Text style={styles.infoText}>Facebook Page</Text>
      <Text style={styles.sectionHeader}>Address</Text>
      <Text style={styles.infoText}>6921 Independence Pkwy. #160</Text>
      <Text style={styles.infoText}>Plano, TX 75023</Text>
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
      <MapView
        style={{height: 300, width: '100%'}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff', // Set a background color
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333', // Set a text color
  },
  infoText: {
    marginBottom: 5,
    color: '#666', // Set a text color
  },
});

export default ContactUsScreen;
