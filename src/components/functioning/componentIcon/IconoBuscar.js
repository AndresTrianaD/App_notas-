import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign,FontAwesome5,Ionicons,Feather,Entypo,MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const IconoBuscar = ({ route }) => {
 
    const [iconName, setIconName] = useState('cursor-text')
   
  
    
    const changeIcon = () => {
      setIconName(prevIconName => prevIconName === 'cursor-text' ? 'close' : 'cursor-text');
     };
  return (
    <MaterialCommunityIcons name={iconName} size={30} color= '#333333'/>
  )
}

export default IconoBuscar