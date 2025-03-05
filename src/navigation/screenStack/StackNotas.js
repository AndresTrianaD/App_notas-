import { View, Text,TextInput, ScrollView, StatusBar, StyleSheet, Button,TouchableOpacity } from 'react-native'
import { AntDesign,FontAwesome,Foundation,Ionicons,Feather,Entypo,MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Notas from '../../screens/Notas';
import Calendario from '../../screens/Calendario';
import { useNavigation } from '@react-navigation/native';
import Crear from '../../screens/Crear';

const Stack = createNativeStackNavigator();

const StackNotas = () => {
    
    const navigation = useNavigation(); 
    const ss2 = () => {
        console.log("xd 2")
     }   
   
    const calendar = () => {
        navigation.navigate('calendario1')
        console.log("xd ww")
     } 

    function LogoTitle() {
        return (
          <View style = {styles.mismaLine}>

            <Text style = {styles.title}>Notas</Text>

          <View style = {styles.iconoI}>
              <Foundation onPress={calendar} name="calendar"size={32} color="white" />
           </View>

           <View style = {styles.iconoII}>
            <AntDesign onPress={ss2} name="ie"size={38} color="white"/>         
          </View>
        
        </View>  
        );
      } 
  return (
    
    <Stack.Navigator 
    //initialRouteName='notas'
    >        
            <Stack.Screen
                name='notas'
                component={Notas}
                options={{title: "Notas",headerStyle:{backgroundColor: '#370170'},
                headerTitle: props => <LogoTitle {...props}/>}}
            />
            <Stack.Screen
                name='calendario1'
                component={Calendario}
                options={{title: "ss",}}
            />
            <Stack.Screen
                name='crear'
                component={Crear}
                options={{title: "Crear nota"}}    
            />
           
        </Stack.Navigator>
  )
}

export default StackNotas

const styles = StyleSheet.create({
     
    mismaLine : {
     flex: 1,
       flexDirection: 'row',
       alignItems: 'center',
   }, 
   title: {
       flex:3,
       fontSize: 20,
       fontWeight: 'bold',
       justifyContent: 'center',
       alignItems: 'center',
       color :'white',
       flexShrink: 3,
       flexBasis: 300,
       //flexBasis: 350,
       //padding: 10

   }, 
     iconoI: {
       flex: 1,
       justifyContent: 'center',
       flexShrink: 1,
       flexBasis: 30,
      // flexBasis: 50,
   }, 
     iconoII: {
       flex: 1,
       justifyContent: 'center',
       flexShrink: 1,
       flexBasis: 0,
      // flexBasis: 50,
   }, 
})
