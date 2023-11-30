import { 
    StyleSheet,
    View, 
    Text, 
    StatusBar,
    Image, 
    SafeAreaView,
   
              } from 'react-native'
import React from 'react'


const Logo = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#333333" barStyle="white-content"/>  
      <View style={styles.iconContainer}>  
      
      <Image source={require('../../src/imagenes/logo01.png')} style={{ width: 170, height: 170, }} />
       
       </View>
       <Text style={{ fontSize: 30, fontWeight: "bold",color:"white"}}>
       Bienvenido a{" "}
          <Text style={{ fontSize: 32,color: "#abdbe3"}}>
                N<Text style={{color: "#76b5c5"}}>O</Text>
                <Text style={{color: "#1e81b0"}}>T</Text>
                <Text style={{color: "#154c79"}}>A</Text>
                <Text style={{color: "#063970"}}>S</Text>
                <Text style={{color: "#eab676"}}>{" "}A</Text>
                <Text style={{color: "#e28743"}}>P</Text>
                <Text style={{color: "#873e23"}}>P</Text>
            </Text>
            </Text>

      <Text style={styles.title}>Aplicacion para crear notas.</Text>
      <Text></Text>
    </SafeAreaView>
  )
}

export default Logo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333333'
    },
    iconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      icon: {
        marginBottom: 20,
      },
    title: {
      fontSize: 18,
    textAlign: 'center',
      color:"white",
    },
  });