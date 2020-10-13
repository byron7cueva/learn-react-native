import React, { Component } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
} from 'react-native';

export class Profile extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Nombre de usuario</Text>
        <Button
          title="Cerrar sesión"
          color="#67a52e"
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})