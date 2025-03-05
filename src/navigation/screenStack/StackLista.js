import { View, Text,TextInput, ScrollView, StatusBar, StyleSheet, Button,TouchableOpacity } from 'react-native'
import { AntDesign,FontAwesome,Foundation,Ionicons,Feather,Entypo,MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ListaTareas from '../../screens/ListaTareas';
import Calendario from '../../screens/Calendario';
import { useNavigation } from '@react-navigation/native';
import CrearLista from '../../screens/CrearLista';

const Stack = createNativeStackNavigator();

const StackLista = () => {
    const navigation = useNavigation();
    const ss3 = () => {
        console.log("xd 3")
     }   
    const calendar = () => {
        navigation.navigate('calendario3')
        console.log("xd ww")
     }
    function LogoTitle3() {
        return (
          <View style = {styles.mismaLine}>

                <Text style = {styles.title}>Lista de tareas</Text>

          <View style = {styles.iconoI}>
              <Foundation onPress={calendar} name="calendar"size={32} color="white" />
           </View>


          <View style = {styles.iconoII}>
            <AntDesign onPress={ss3} name="ie"size={38} color="white"/>         
          </View>
        </View>  
        );
      }
  return (
    <Stack.Navigator 
    //initialRouteName='notas'
    >        
            <Stack.Screen
                name='listaTareas'
                component={ListaTareas}
                options={{title:"Lista de tareas",headerStyle:{backgroundColor: '#370170'},
                headerTitle: props => <LogoTitle3 {...props}/>}}
            />
            <Stack.Screen
                name='calendario3'
                component={Calendario}
                options={{title: "ss",}}
            />
            <Stack.Screen
                name='crearLista'
                component={CrearLista}
                options={{title: "ss",}}
            />
           
        </Stack.Navigator>
  )
}

export default StackLista

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
