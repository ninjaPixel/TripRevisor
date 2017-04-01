import React from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import CityList from './app/components/CityList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const TripRevisor = () => (
  <View style={styles.container}>
    <CityList />
  </View>
  );

AppRegistry.registerComponent('TripRevisor', () => TripRevisor);
