import { View, Text, StyleSheet,TextInput,Button } from 'react-native'
import React , { useEffect, useRef, useState }from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

const Buscar = ({ route }) => {

  const navigation = useNavigation();
 
  useFocusEffect(
    React.useCallback(() => { 
      //useRef(null)
      return () => {
   
      }
    }, [])
  )

  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  

  useEffect(() => {
    if (route.params?.atTecla) {
      atvTeclado();
    
    }
  }, [route.params]);

  const ff =()=>{
    navigation.navigate('iconoBuscar', { dd: true })
  }

  const atvTeclado =()=>{
   // /*
    if (isFocused) {
      inputRef.current.blur();
    } else {
      inputRef.current.focus();
    }
    setIsFocused(!isFocused);
   // */
    console.log(isFocused+"khkhkhs")
    ff()
  }
  return (
    <View>
      <TextInput style = {styles.title}
      placeholder='Ej: 10'
      placeholderTextColor="#616161"
      onChangeText={text => console.log(text)}
      ref={inputRef}
      selectionColor="red"
      editable={true}

      />
  <Button
      title="Enfocar el TextInput"
      onPress={() => {
        /*
        if (isFocused) {
          inputRef.current.blur();
        } else {
          inputRef.current.focus();
        }
        setIsFocused(!isFocused);
        */
        atvTeclado()
      }}
    />
    </View>
  )
}

export default Buscar

const styles = StyleSheet.create({
     
  mismaLine : {
   flex: 1,
     flexDirection: 'row',
     alignItems: 'center',
 }, 
 title: {
     
     fontSize: 20,
     fontWeight: 'bold',
     justifyContent: 'center',
     alignItems: 'center',
    
     color :'black',
   
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