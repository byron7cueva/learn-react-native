import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Platform
} from 'react-native';
import { useNavigation } from '@react-navigation/native'

import Search from '../../sections/containers/search';

export const Lucky = () => {
  const navigation = useNavigation()

  const handleFocus = () => {
    StatusBar.setBarStyle('dark-content')
    
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('white')
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
      <Text>🍀</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})