import React, { useEffect } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  StatusBar,
  Platform
} from 'react-native';
import { useNavigation } from '@react-navigation/native'

export const Profile = () => {
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
    <SafeAreaView style={styles.container}>
      <Text>Nombre de usuario</Text>
      <Button
        title="Cerrar sesión"
        color="#67a52e"
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})