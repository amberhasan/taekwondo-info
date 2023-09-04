import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import colors from '../theme/colors'; // Adjust the path accordingly
import {Image} from 'react-native-reanimated/lib/typescript/Animated';
// import {aboutUsData} from '../models/aboutUsModel';
import useAboutUsController from '../hooks/useAboutUsController';

const BulletPoint = ({text}) => (
  <View style={styles.bulletContainer}>
    <View style={styles.bullet} />
    <Text style={styles.bulletText}>{text}</Text>
  </View>
);

const CollapsibleSection = ({
  title,
  children,
  index,
  currentIndex,
  onExpand,
}) => {
  const isExpanded = index === currentIndex;

  return (
    <View style={styles.collapsibleContainer}>
      <TouchableOpacity
        style={styles.collapsibleHeader}
        onPress={() => onExpand(index)}>
        <Text style={styles.collapsibleHeaderText}>{title}</Text>
      </TouchableOpacity>
      <Collapsible collapsed={!isExpanded}>
        <ScrollView>
          <View style={styles.collapsibleContent}>{children}</View>
        </ScrollView>
      </Collapsible>
    </View>
  );
};

const AboutUsScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleExpandSection = index => {
    setCurrentIndex(currentIndex === index ? null : index);
  };

  const {aboutUsData} = useAboutUsController();

  return (
    <ImageBackground
      source={require('../assets/images/background/gray_texture.png')}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        {aboutUsData.map((section, index) => (
          <CollapsibleSection
            key={index}
            title={section.title}
            index={index}
            currentIndex={currentIndex}
            onExpand={handleExpandSection}>
            {section.content.map((item, itemIndex) => (
              <BulletPoint key={itemIndex} text={item} />
            ))}
          </CollapsibleSection>
        ))}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBackground,
    padding: 20,
  },
  bulletContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 5,
  },
  bullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.sectionHeaders,
    marginRight: 10,
    marginTop: 6,
  },
  bulletText: {
    flex: 1,
    fontSize: 16,
    color: colors.sectionHeaders,
    lineHeight: 24,
  },
  collapsibleContainer: {
    marginVertical: 10,
  },
  collapsibleHeader: {
    backgroundColor: colors.accentColor,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  collapsibleHeaderText: {
    fontSize: 18,
    color: colors.primaryBackground,
  },
  collapsibleContent: {
    backgroundColor: colors.alternativeBackground,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' based on your preference
  },
});

export default AboutUsScreen;
