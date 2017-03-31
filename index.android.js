import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import CityList from './app/components/CityList';

export default class TripRevisor extends Component {
  render() {
    return (
      <View style={styles.container}>
      <CityList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('TripRevisor', () => TripRevisor);
