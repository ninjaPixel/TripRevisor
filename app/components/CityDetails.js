import React, { Component, PropTypes } from 'react';
import Meteor from 'react-native-meteor';
import { ScrollView, Text } from 'react-native';


class CityDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: '',
    };
  }

  componentDidMount() {
    const params = { name: this.props.navigation.state.params.name };
    Meteor.call('cities.findOne', params, (err, cities) => {
      if (err) {
        console.log(err);
        this.setState({ error: err.reason });

      } else {
        console.log('cities', cities);
        this.setState({ error: '' });

      }
      this.setState({ loading: false });
    });
  }

  render() {
    const isLoading = this.state.loading;
    const error = this.state.error;
    return (
      <ScrollView>
        { isLoading ? (
          <Text>Loading {this.props.navigation.state.params.name} details...</Text>
        ) : (
          <Text>Hello, {this.props.navigation.state.params.name}!</Text>
        )}

        {error ? (
          <Text>{error}</Text>
        ): (null)}
      </ScrollView>
    );
  }
}

export default CityDetails;
