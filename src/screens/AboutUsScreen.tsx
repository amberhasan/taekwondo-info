import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Collapsible from 'react-native-collapsible';

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
      {/* About Instructor */}
      <TouchableOpacity onPress={toggleLocation}>
        <Text>About Instructor</Text>
      </TouchableOpacity>
      <Collapsible collapsed={locationCollapsed}>
        <Text>Location details go here.</Text>
      </Collapsible>

      {/* Business Hours */}
      <TouchableOpacity onPress={toggleHours}>
        <Text>About Our School</Text>
      </TouchableOpacity>
      <Collapsible collapsed={hoursCollapsed}>
        <Text>Business hours details go here.</Text>
      </Collapsible>

      {/* What We Teach */}
      <TouchableOpacity onPress={toggleRules}>
        <Text>What We Teach</Text>
      </TouchableOpacity>
      <Collapsible collapsed={rulesCollapsed}>
        <Text>School rules details go here.</Text>
      </Collapsible>

      {/* Why Taekwondo */}
      <TouchableOpacity onPress={toggleRules}>
        <Text>Why Taekwondo</Text>
      </TouchableOpacity>
      <Collapsible collapsed={rulesCollapsed}>
        <Text>School rules details go here.</Text>
      </Collapsible>

      {/* Benefits of Taekwondo */}
      <TouchableOpacity onPress={toggleRules}>
        <Text>Benefits of Taekwondo</Text>
      </TouchableOpacity>
      <Collapsible collapsed={rulesCollapsed}>
        <Text>School rules details go here.</Text>
      </Collapsible>

      {/* School Rules */}
      <TouchableOpacity onPress={toggleRules}>
        <Text>School Rules</Text>
      </TouchableOpacity>
      <Collapsible collapsed={rulesCollapsed}>
        <Text>School rules details go here.</Text>
      </Collapsible>

      {/* Facebook Page */}
      <TouchableOpacity onPress={toggleFacebook}>
        <Text>Facebook Page</Text>
      </TouchableOpacity>
      <Collapsible collapsed={facebookCollapsed}>
        <Text>Facebook page details go here.</Text>
      </Collapsible>

      {/* Our Schedule */}
      <TouchableOpacity onPress={toggleSchedule}>
        <Text>Our Schedule</Text>
      </TouchableOpacity>
      <Collapsible collapsed={scheduleCollapsed}>
        <Text>Our school schedule details go here.</Text>
      </Collapsible>
    </View>
  );
};

export default AboutUsScreen;
