import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Collapsible from 'react-native-collapsible';

const AboutUsScreen = () => {
  const [locationCollapsed, setLocationCollapsed] = useState(true);
  const [hoursCollapsed, setHoursCollapsed] = useState(true);
  const [rulesCollapsed, setRulesCollapsed] = useState(true);
  const [facebookCollapsed, setFacebookCollapsed] = useState(true);

  const toggleLocation = () => setLocationCollapsed(!locationCollapsed);
  const toggleHours = () => setHoursCollapsed(!hoursCollapsed);
  const toggleRules = () => setRulesCollapsed(!rulesCollapsed);
  const toggleFacebook = () => setFacebookCollapsed(!facebookCollapsed);

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
    </View>
  );
};

export default AboutUsScreen;
