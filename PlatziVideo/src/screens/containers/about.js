import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  Platform
} from 'react-native';
import { useNavigation } from '@react-navigation/native'

export const About = () => {
  const navigation = useNavigation()

  const handleFocus = () => {
    StatusBar.setBarStyle('light-content')

    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('#022c43')
    }
  }

  useEffect(() => {
    navigation.addListener('focus', handleFocus)
    return () => {
      navigation.removeListener('focus', handleFocus)
    }
  }, [])

  return (
    <View style={styles.container}>
      <Image
        source={{uri: 'https://static.platzi.com/media/achievements/badge-reactnative-9c23a814-e9c3-4041-afbd-ff8083fbf32f.png'}}
        style={styles.logo}
      />
      <Text style={styles.text}>Platzi Video es construido como una aplicación educativa para enseñar React Native y React Navigation</Text>
      <Text style={styles.text}>@byron7cueva</Text>
      <Text style={styles.text}>2020</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#022c43',
  },
  text: {
    textAlign: 'center',
    marginBottom: 5,
    color: 'white',
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  }
})
