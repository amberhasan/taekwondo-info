import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Appbar, Button} from 'react-native-paper';

const BeltDetailScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleIndexChange = index => {
    setSelectedIndex(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.segmentedControlContainer}>
        <Button
          mode={selectedIndex === 0 ? 'contained' : 'outlined'}
          onPress={() => handleIndexChange(0)}
          style={[styles.segmentedButton, styles.leftSegmentedButton]}>
          Junior
        </Button>
        <Button
          mode={selectedIndex === 1 ? 'contained' : 'outlined'}
          onPress={() => handleIndexChange(1)}
          style={[styles.segmentedButton, styles.rightSegmentedButton]}>
          Senior
        </Button>
      </View>
      <View style={styles.content}>
        {selectedIndex === 0 ? (
          <Text>Junior Content</Text>
        ) : (
          <Text>Senior Content</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  segmentedControlContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  segmentedButton: {
    flex: 1,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BeltDetailScreen;
