import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Search from '../../sections/containers/search';

export class Lucky extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>🍀</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})