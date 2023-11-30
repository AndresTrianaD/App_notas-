import { View, Text, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'


const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="white" barStyle="dark-content"/>
      <ScrollView>
          <View>
          <Text>Hola mundo</Text>
          </View>
      </ScrollView>
    </NavigationContainer>
  )
}

export default DrawerNavigation