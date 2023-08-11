import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Collapsible from 'react-native-collapsible';
import CollapsibleView from '../components/CollapsibleView';

const Data = [
  {
    title: 'About Instructor',
    description: '',
    images: [],
    isExpanded: false,
  },
];

const AboutUsScreen = () => {
  const [locationCollapsed, setLocationCollapsed] = useState(true);
  const [hoursCollapsed, setHoursCollapsed] = useState(true);
  const [rulesCollapsed, setRulesCollapsed] = useState(true);
  const [facebookCollapsed, setFacebookCollapsed] = useState(true);
  const [teachCollapsed, setTeachCollapsed] = useState(true);
  const [scheduleCollapsed, setScheduleCollapsed] = useState(true);

  const toggleLocation = () => setLocationCollapsed(!locationCollapsed);
  const toggleHours = () => setHoursCollapsed(!hoursCollapsed);
  const toggleRules = () => setRulesCollapsed(!rulesCollapsed);
  const toggleFacebook = () => setFacebookCollapsed(!facebookCollapsed);
  const toggleTeach = () => setTeachCollapsed(!teachCollapsed);
  const toggleSchedule = () => setScheduleCollapsed(!scheduleCollapsed);

  return (
    <View>
      <CollapsibleView title={'About Instructor'}>
        <Text style={styles.description}>
          Master Lee (President & Founder) is the head instructor at Lee's U.S.
          Taekwondo Academy. He is a WTF certified 8th Dan Black Belt with over
          35 years of experience of teaching and practicing Taekwondo. Master
          Lee founded Lee's U.S. Taekwondo Academy in 2004 and over 1000
          students, children & adults, have passed through this school with over
          100 students earning their Black Belts.
        </Text>
      </CollapsibleView>

      <CollapsibleView title={'About Our School'}>
        <Text style={styles.description}>
          Master Lee's U.S. Taekwondo, over the 18 years we have been in
          business, is a special place dedicated to fitness, family and
          education. The emphasis of our training is based on setting and
          attaining goals, and reaching your maximum potential. Master Lee
          emphasizes the importance of internal change as well as external
          changes to the body from physical training. Thinking positively,
          avoiding negative thinking and speech, doing good deeds everyday,
          drinking green tea, beginning each day with meditation. By practicing
          these things daily, we can keep our bodies, minds and spirits in good
          health and harmony.
        </Text>
      </CollapsibleView>

      <CollapsibleView title={'About Taekwondo'}>
        <Text>What do we teach?</Text>
        <Text style={styles.description}>
          Tae Kwon Do, the world’s most popular martial art, originated in
          Korea. Officially introduced as an Olympic sport in 2000, Tae Kwon Do
          is admired for its wide range of high, powerful kicks, powerful hand
          strikes, and strong defensive techniques. But Tae Kwon Do is much more
          than a sport, it is a philosophy. The ultimate goal of Te Kwon Do is
          self-improvement through discipline of the mind and conditioning of
          the body. The specialized training develops concentration and
          confidence while emphasizing respect and responsibility. It expands
          aerobic capacity, strengthens and tones muscles, increases
          flexibility, and improves coordination and balance. Tae Kwon Do is
          excellent for people of all ages and types.
        </Text>
        <Text>Why Taekwondo?</Text>
        <Text style={styles.description}>
          Developing and maintaining a sound body and mind are keys to enjoying
          life. With Taekwondo, you learn to unite the power of your body with
          the power of your mind thereby increasing your energy, your
          self-discipline and confidence, improving your health, reducing your
          stress and maintaining your general fitness for a longer happier life.
          Each martial arts student possesses different physical abilities. Size
          and strength vary from one person to another. Whatever your current
          fitness level by developing a strong foundation in the basics of
          Taekwondo, you will improve your physical abilities, your mental
          discipline and maximize your self-defense skills..
        </Text>
        <Text>Benefits of Taekwondo</Text>
        <Text>
          Improved Reflexes and Coordination. Increased strength, stamina and
          Flexibility. Improved Cardiovascular endurance and Weight Control.
          Stress Reduction and Increased Levels of Relaxation. Increased self
          Confidence and self Discipline. You will sleep better, feel good about
          yourself, and have FUN!
        </Text>
      </CollapsibleView>

      <CollapsibleView title={'School Rules'}>
        <Text>
          - Please arrive 10 minutes before class time. - Stretch quietly while
          waiting for class to begin. - Yellow belt and up = Sparring Gear is
          required for protection. - Keep body, hair and uniform clean and
          presentable. - Always be respectful and courteous to others.
        </Text>
      </CollapsibleView>

      <CollapsibleView title={'Our Schedule'}>
        <Text>Schedule</Text>
      </CollapsibleView>
    </View>
  );
};

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    color: 'black',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
});
export default AboutUsScreen;
