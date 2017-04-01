import React from 'react';
import { ScrollView, Text } from 'react-native';

const CityDetails = props => (
  <ScrollView>
    <Text>Hello, {props.name}!</Text>
  </ScrollView>
);

export default CityDetails;
