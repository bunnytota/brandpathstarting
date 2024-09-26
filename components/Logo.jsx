import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
const Logo = () => {
  return (
    <Image
    style={styles.logo}
    source={require('../assets/logo.png')}
    resizeMode='contain'
  />
  )
}

export default Logo

const styles = StyleSheet.create({

    logo: {
        height: 100,
        width: 100,
      },
})