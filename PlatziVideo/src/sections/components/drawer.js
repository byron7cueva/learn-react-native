import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet
} from 'react-native'
import { DrawerItemList } from '@react-navigation/drawer'

export const DrawerContent = (props) => (
  <ScrollView>
    <SafeAreaView>
      <Image
        source={require('../../../assets/logo.png')}
        style={styles.logo}
      />
      <DrawerItemList {...props} />
    </SafeAreaView>
  </ScrollView>
)

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 26,
    resizeMode: 'contain',
    marginVertical: 20,
    marginLeft: 10
  }
})