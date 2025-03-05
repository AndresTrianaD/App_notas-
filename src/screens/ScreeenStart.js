import { View, Text, ScrollView, StatusBar, StyleSheet, } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

const ScreeenStart = () => {
  return (
  <NavigationContainer>
    <StatusBar backgroundColor="white" barStyle="dark-content"/>
    <View>
      <Text style={styles.title}>ss</Text>
    </View>
    <ScrollView>
        <View>
        <Text>Hola mundo</Text>
        </View>
    </ScrollView>
  </NavigationContainer>
  )
}

export default ScreeenStart

const styles = StyleSheet.create({

    title: {
        padding: 10,
        fontSize: 18,
        //textAlign: 'center',
        color:"white",
        backgroundColor:"red"
    },
  })