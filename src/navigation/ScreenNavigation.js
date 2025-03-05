import { View, Text,TextInput, ScrollView, StatusBar, StyleSheet, Button,TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign,FontAwesome,Foundation,Ionicons,Feather,Entypo,MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons'
import { Icon } from 'react-native-elements'
import { useNavigation, useNavigationState } from '@react-navigation/native';

import CompNavig from '../components/functioning/CompNavig'
import StackBuscar from './screenStack/StackBuscar'
import StackNotas from './screenStack/StackNotas'
import StackLista from './screenStack/StackLista'
import StackAjustes from './screenStack/StackAjustes'



//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const Tab = createBottomTabNavigator()
//const Tap = createMaterialTopTabNavigator()

const ScreenNavigation = () => {
  
    const navigation = useNavigation();

    const screenOptions = (route, color)=>{
        let iconName
        switch (route.name) {
            case "stackNotas":
                iconName = "clipboard-text-outline"
                break
            case "stackBuscar":
                //magnify
                //magnify-expand
                //magnify-scan
                iconName = "magnify-scan"
                break
            case "stackLista":
                iconName = "clipboard-list-outline"
                break
            case "stackAjustes":
                //cog-outline
                //cog
                iconName = "cog-outline"
                break
        }
        return(
            <Icon
                type="material-community"
                name={iconName}
                size={28}
                color={color}
            />
        )
    }
 
  return (
 
    <Tab.Navigator
     initialRouteName="notas"
     animationEnabled={true}
       screenOptions={({ route }) => ({
        
        tabBarActiveTintColor: '#c55b5b',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel:false,
        tabBarStyle: [
          {
            display: 'flex',
            backgroundColor:'rgba(65, 1, 65, 1.5)' ,//"#333333",
            scrollEnabled: true,
            //borderRadius: 100,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25, 
            //borderTopWidth: 10,
            //borderTopColor: 'black',
            //borderTopColor: 'rgba(0, 0, 0, 0.1)',
            //overflow: 'hidden',
          },
          null,
        ],
      
        tabBarIcon: ({ color }) => screenOptions(route, color),
      })}
    >  
        <Tab.Screen
            name = "stackNotas"
            component={StackNotas}
            options={{title: false,headerStyle:{backgroundColor: '#370170'},
            headerShown: false,unmountOnBlur: true
          }}
        />
         <Tab.Screen
            name = "stackBuscar"
            component={StackBuscar}
            options={{title:"stackBuscar",headerStyle:{backgroundColor: '#370170'},
            headerShown: false,unmountOnBlur: true
          }}
        />
        <Tab.Screen
            name = "compNavig"
            component={CompNavig}
            options={{
                tabBarButton: ({focused}) => (
                    <View style={{flex: 1,position:'relative',bottom:42,alignItems:'center', justifyContent:'space-around',height:85}}>
                     <CompNavig focused={focused} />
                    </View>
                ),headerShown: false,unmountOnBlur: false
            }}
        />
         <Tab.Screen
            name = "stackLista"
            component={StackLista}
            options={{title:"Lista de tareas",headerStyle:{backgroundColor: '#370170'},
            headerShown: false,unmountOnBlur: true
         
          }}
        />
        <Tab.Screen
            name = "stackAjustes"
            component={StackAjustes}
            options={{title:"Ajustes",headerStyle:{backgroundColor: '#370170'},
            headerShown: false,unmountOnBlur: true
            //tabBarStyle: {display: 'flex'}
            // headerTitle: props => <LogoTitle4 {...props}/>
          }}
        />
      
    </Tab.Navigator>
  )
}

export default ScreenNavigation

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
       flexBasis: 420,
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




