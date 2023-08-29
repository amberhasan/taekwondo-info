import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

const fileUrl = 'https://leesustaekwondo.com/assets/dls/readingform.pdf'; // URL of the file you want to download from leesustaekwondo.com

const downloadFile = async () => {
  const {dirs} = RNFetchBlob.fs;
  const filename = `readingform-${new Date().getTime()}.pdf`;
  const path =
    Platform.OS === 'ios'
      ? `${dirs.DocumentDir}/${filename}`
      : `${dirs.DocumentDir}/${filename}`;
  try {
    const androidConfig = {
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        mediaScannable: true,
        title: filename,
        path,
      },
    };
    const iosConfig = {
      fileCache: true,
      title: filename,
      path,
      appendExt: 'pdf',
    };
    const config = Platform.OS === 'ios' ? iosConfig : androidConfig;
    const rnFetchBlob = RNFetchBlob.config(config);
    const res = await rnFetchBlob.fetch('GET', fileUrl, {});
    if (Platform.OS === 'ios') {
      RNFetchBlob.fs.writeFile(path, res.data, 'base64');
      RNFetchBlob.ios.previewDocument(path);
    } else {
      console.log('The file saved to ', res.path());
      Alert.alert('file downloaded');
    }
  } catch (err) {
    console.log('download failed', err);
  }
};

const SummerReadingProgram = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        Our school's Summer Reading Program helps encourage young students to
        read books and write summaries about them to help further their
        understanding.
      </Text>
      <TouchableOpacity onPress={downloadFile} style={styles.button}>
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
