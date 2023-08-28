import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Appbar, Button} from 'react-native-paper';

const BeltDetailScreen = ({route}) => {
  const id = route.params.id;
  const [selectedTab, setSelectedTab] = useState('junior');
  const [beltDetails, setBeltDetails] = useState({});

  useEffect(() => {
    axios
      .get(`https://taekwondo-backend.fly.dev/belts?beltType=${id}`)
      .then(res => {
        setBeltDetails(res.data);
      })
      .catch(err => {
        console.log('err', err);
      });
  }, []);

  const handleTabChange = (name: string) => {
    setSelectedTab(name);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.segmentedControlContainer}>
        <Button
          mode={selectedTab === 'junior' ? 'contained' : 'outlined'}
          onPress={() => handleTabChange('junior')}
          style={[
            styles.segmentedButton,
            styles.leftSegmentedButton,
            selectedTab === 'junior' ? styles.selectedButton : {},
          ]}>
          Junior
        </Button>
        <Button
          mode={selectedTab === 'senior' ? 'contained' : 'outlined'}
          onPress={() => handleTabChange('senior')}
          style={[
            styles.segmentedButton,
            styles.rightSegmentedButton,
            selectedTab === 'senior' ? styles.selectedButton : {},
          ]}>
          Senior
        </Button>
      </View>
      <View style={styles.content}>
        {beltDetails[selectedTab] && (
          <View>
            {Object.entries(beltDetails[selectedTab]).map(
              ([section, values]) => {
                // Customize section title display
                let formattedSection = section.replace(/_/g, ' '); // Replace underscores with spaces
                formattedSection = formattedSection.replace(
                  /\w\S*/g,
                  txt =>
                    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
                ); // Capitalize each word

                return (
                  <View key={section} style={styles.sectionContainer}>
                    <View style={styles.sectionBorder}>
                      <Text style={styles.subtitle}>{formattedSection}:</Text>
                      {Array.isArray(values) ? (
                        <View style={styles.bulletList}>
                          {values.map((value, index) => (
                            <Text key={index} style={styles.bulletPoint}>
                              • {value}
                            </Text>
                          ))}
                        </View>
                      ) : (
                        <Text style={styles.details}>{values}</Text>
                      )}
                    </View>
                  </View>
                );
              },
            )}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  segmentedControlContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20, // Add horizontal padding
    marginTop: 20,
  },
  segmentedButton: {
    flex: 1,
    paddingHorizontal: 10, // Add horizontal padding
  },
  leftSegmentedButton: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRightWidth: 0,
  },
  rightSegmentedButton: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderLeftWidth: 0,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  sectionContainer: {
    marginBottom: 15,
  },
  sectionBorder: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    elevation: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  details: {
    fontSize: 16,
    color: '#555',
  },
  selectedButton: {
    backgroundColor: 'blue',
    borderColor: 'blue',
  },
});

export default BeltDetailScreen;
