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
      {/* Location */}
      <TouchableOpacity onPress={toggleLocation}>
        <Text>Location</Text>
      </TouchableOpacity>
      <Collapsible collapsed={locationCollapsed}>
        <Text>Location details go here.</Text>
      </Collapsible>

      {/* Business Hours */}
      <TouchableOpacity onPress={toggleHours}>
        <Text>Business Hours</Text>
      </TouchableOpacity>
      <Collapsible collapsed={hoursCollapsed}>
        <Text>Business hours details go here.</Text>
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

      {/* What We Teach */}
      <TouchableOpacity onPress={toggleTeach}>
        <Text>What We Teach</Text>
      </TouchableOpacity>
      <Collapsible collapsed={teachCollapsed}>
        <Text>Details about what we teach go here.</Text>
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
