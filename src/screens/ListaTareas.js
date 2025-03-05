import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native';

const ListaTareas = ({ route }) => {

  useFocusEffect(
    React.useCallback(() => { 
      setBotonPresionado(true)
      return () => {
   
      }
    }, [])
  )

  const navigation = useNavigation();
  const [botonPresionado, setBotonPresionado] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (route.params?.crLista) {
      crearlist();
    }
  }, [route.params]);
  const crearlist =()=>{
    setBotonPresionado(!botonPresionado);
    if (botonPresionado) {
      navigation.navigate('crearLista')
    } else {
     // navigation.navigate('listaTareas')
      console.log("jj")
      incrementCounter()
    }    
}

const incrementCounter = () => {
  setCounter(counter + 1);
};

  return (
    <View>
       <Text>Counter: {counter}</Text>
      <Text>ListaTareahhs </Text>
    </View>
  )
}

export default ListaTareas