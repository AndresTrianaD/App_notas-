import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useFocusEffect, useNavigation, useNavigationState } from '@react-navigation/native';
import { AntDesign,FontAwesome5,Ionicons,Feather,Entypo,MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import IconoBuscar from './componentIcon/IconoBuscar';

const CompNavig = () => {

        const navigation = useNavigation();
        const routeName = useNavigationState(state => state.routes[state.index].name);
      

        const onPress = () => {
         if (routeName === 'stackNotas') {
           // Navega a la pantalla 'Details'
          // navigation.navigate('Details');
          navigation.navigate('crear')
          console.log('hola1');
         } else if (routeName === 'stackBuscar') {
           // Realiza alguna otra acción
           navigation.navigate('buscar', { atTecla: true })
          // changeIcon()
         
           console.log('hola2');
         }else if (routeName === 'stackLista') {
            // Realiza alguna otra acción  CrearLista
            navigation.navigate('listaTareas', { crLista: true})
           // navigation.navigate('crearLista')
            console.log('hola3');
         }else if (routeName === 'stackAjustes') {
            // Realiza alguna otra acción
            console.log('hola4');
         }
        };
        /*
        let iconName
        if (routeName === 'notas') {
          
           iconName = 'plus'
          } else if (routeName === 'buscar') {
            iconName = 'cursor-text'
          }else if (routeName === 'listaTareas') {
             iconName = 'exposure-plus-1'
          }else if (routeName === 'ajustes') {
             iconName = 'info'
          }

*/


const [iconName, setIconName] = useState('cursor-text')
const changeIcon = () => {
  setIconName(prevIconName => prevIconName === 'cursor-text' ? 'close' : 'cursor-text');
 };
 console.log( iconName+" aa")
 console.log(routeName+ " ddss")

 
  return (
    
    <TouchableOpacity
      style={styles.IconoCentro} 
      onPress={onPress}>
     {routeName === 'stackNotas' && ( 
            <AntDesign name="plus" size={30} color= '#333333'/>
            
        )}
        {routeName === 'stackBuscar' && (  
          <IconoBuscar />
           //<MaterialCommunityIcons name={iconName} size={30} color= '#333333'/>
        )}
        {routeName === 'stackLista' && (
           <MaterialIcons name="exposure-plus-1" size={30} color= '#333333'/>
            //<MaterialCommunityIcons name={iconName} size={30} color= '#333333'/>
        )}
        {routeName === 'stackAjustes' && (
            <AntDesign  name="info" size={30} color= '#333333'/>
        )}
  </TouchableOpacity>
 
  )
}

export default CompNavig


const styles = StyleSheet.create({
//#c55b5b
    IconoCentro:{
      backgroundColor: "orange",
      padding: 15,
      borderRadius:  100,
      shadowColor: "white",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.5, // Aumenta la opacidad de la sombra
      shadowRadius: 10, // Aumenta el radio de la sombra
      elevation: 10, // Aumenta la elevación del componente
    },
 
  })


  /* 
       <View>
      <AntDesign name={iconName} size={33} color= '#333333'/>
      <MaterialCommunityIcons name={iconName} size={33} color= '#333333'/>
      <MaterialIcons name={iconName} size={33} color= '#333333'/>
      <AntDesign  name={iconName} size={33} color= '#333333'/>
      </View>
  */