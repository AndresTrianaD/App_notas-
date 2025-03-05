import { View, Text, ScrollView,Button,StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Notas = ({ navigation }) => {

  return (
    <SafeAreaView style = {styles.container}>
    <ScrollView >
    <View>
      <Text>Notas</Text>
      <Text>Notas</Text>
      <Button
      title="Go tllo Notificationsss"
      onPress={() => navigation.navigate('calendario1')}
    />
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Notas

const styles = StyleSheet.create({
  container:{ 
    flex: 1,
    padding: 18,
    backgroundColor: '#333333', 
  },

})