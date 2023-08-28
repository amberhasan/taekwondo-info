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

  return (
    <ImageBackground
      source={require('../assets/images/background/gray_texture.png')}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <CollapsibleSection
          title={'School Rules'}
          index={0}
          currentIndex={currentIndex}
          onExpand={handleExpandSection}>
          <BulletPoint text="Please arrive 10 minutes early." />
          <BulletPoint text="Stretch quietly before class starts." />
          <BulletPoint text="Protective sparring gear required (yellow belt+)" />
          <BulletPoint text="Keep body, hair, uniform presentable" />
          <BulletPoint text="Be respectful and courteous to others" />
        </CollapsibleSection>

        <CollapsibleSection
          title={'Our Schedule'}
          index={1}
          currentIndex={currentIndex}
          onExpand={handleExpandSection}>
          <Text>Schedule</Text>
        </CollapsibleSection>

        <CollapsibleSection
          title={'About Instructor'}
          index={2}
          currentIndex={currentIndex}
          onExpand={handleExpandSection}>
          <Text style={styles.description}>
            Master Lee (President & Founder) is the head instructor at Lee's
            U.S. Taekwondo Academy. He is a WTF certified 8th Dan Black Belt
            with over 35 years of experience of teaching and practicing
            Taekwondo. Master Lee founded Lee's U.S. Taekwondo Academy in 2004
            and over 1000 students, children & adults, have passed through this
            school with over 100 students earning their Black Belts.
          </Text>
        </CollapsibleSection>

        <CollapsibleSection
          title={'About Our School'}
          index={3}
          currentIndex={currentIndex}
          onExpand={handleExpandSection}>
          <Text style={styles.description}>
            Master Lee's U.S. Taekwondo, over the 18 years we have been in
            business, is a special place dedicated to fitness, family and
            education. The emphasis of our training is based on setting and
            attaining goals, and reaching your maximum potential. Master Lee
            emphasizes the importance of internal change as well as external
            changes to the body from physical training. Thinking positively,
            avoiding negative thinking and speech, doing good deeds everyday,
            drinking green tea, beginning each day with meditation. By
            practicing these things daily, we can keep our bodies, minds and
            spirits in good health and harmony.
          </Text>
        </CollapsibleSection>

        <CollapsibleSection
          title={'About Taekwondo'}
          index={4}
          currentIndex={currentIndex}
          onExpand={handleExpandSection}>
          <Text>What do we teach?</Text>
          <Text style={styles.description}>
            Tae Kwon Do, the world’s most popular martial art, originated in
            Korea. Officially introduced as an Olympic sport in 2000, Tae Kwon
            Do is admired for its wide range of high, powerful kicks, powerful
            hand strikes, and strong defensive techniques. But Tae Kwon Do is
            much more than a sport, it is a philosophy. The ultimate goal of Te
            Kwon Do is self-improvement through discipline of the mind and
            conditioning of the body. The specialized training develops
            concentration and confidence while emphasizing respect and
            responsibility. It expands aerobic capacity, strengthens and tones
            muscles, increases flexibility, and improves coordination and
            balance. Tae Kwon Do is excellent for people of all ages and types.
          </Text>
          <Text>Why Taekwondo?</Text>
          <Text style={styles.description}>
            Developing and maintaining a sound body and mind are keys to
            enjoying life. With Taekwondo, you learn to unite the power of your
            body with the power of your mind thereby increasing your energy,
            your self-discipline and confidence, improving your health, reducing
            your stress and maintaining your general fitness for a longer
            happier life. Each martial arts student possesses different physical
            abilities. Size and strength vary from one person to another.
            Whatever your current fitness level by developing a strong
            foundation in the basics of Taekwondo, you will improve your
            physical abilities, your mental discipline and maximize your
            self-defense skills..
          </Text>
          <Text>Benefits of Taekwondo</Text>
          <Text>
            Improved Reflexes and Coordination. Increased strength, stamina and
            Flexibility. Improved Cardiovascular endurance and Weight Control.
            Stress Reduction and Increased Levels of Relaxation. Increased self
            Confidence and self Discipline. You will sleep better, feel good
            about yourself, and have FUN!
          </Text>
        </CollapsibleSection>
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
