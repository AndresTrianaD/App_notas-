import React, { useState , useEffect }  from 'react'
import Logo from './src/screens/Logo'
import ScreenNavigation from './src/navigation/ScreenNavigation'
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar'
import Notas from './src/screens/Notas';


export default function App() {
  const [pgLogo, setPgLogo] = useState(true)
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    // Simula una carga de 2 segundos
    setTimeout(() => {
      setPgLogo(false);
      //1000 es un segundo 
    }, 1000);
  }, []);
  if (pgLogo){
    return <Logo/>
  }  
  return (
    <NavigationContainer>
    <StatusBar backgroundColor="white" barStyle="dark-content"/>
      <ScreenNavigation/>
      </NavigationContainer>
  )

}

// <ScreenNavigation/>
//   <Notas/>