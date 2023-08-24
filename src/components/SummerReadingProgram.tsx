import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const SummerReadingProgram = () => {
  const handleFakeDownload = () => {
    console.log('Fake download started...');
    setTimeout(() => {
      console.log('Fake download completed.');
    }, 2000); // Simulating a delay for download completion
  };

  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        Our school's Summer Reading Program helps encourage young students to
        read books and write summaries about them to help further their
        understanding.
      </Text>
      <TouchableOpacity onPress={handleFakeDownload} style={styles.button}>
        <Text style={styles.buttonText}>Download PDF</Text>
      </TouchableOpacity>
      {/* 
      <Image
        source={require('../assets/images/homepage/summer_reading_form.png')}
        style={styles.image}
      />
      */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOpacity: 1,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 15,
  },
});

export default SummerReadingProgram;
