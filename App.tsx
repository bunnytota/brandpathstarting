import { StyleSheet, Text, View, } from 'react-native'
import Homescreen from './screens/Homescreen'
import React from 'react'
import SplashScreen from 'react-native-splash-screen'
import { useEffect } from 'react'
import { Platform } from 'react-native'

// Import navigation components
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Changepin from './screens/Changepin'
import Sharedlayout from './components/Sharedlayout'
const Stack = createNativeStackNavigator()

const App = () => {
  useEffect(() => {
    if (Platform.OS === 'android') SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Homescreen} options={{headerShown:false}} />
        <Stack.Screen name="Change" component={Changepin} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
    
    
  )
}

export default App

const styles = StyleSheet.create({


})