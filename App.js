import React, { useState , useEffect }  from 'react'
import DrawerNavigation from './src/drawer/DrawerNavigation';
import Logo from './src/screens/Logo';

export default function App() {
  const [pgLogo, setPgLogo] = useState(true)
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    // Simula una carga de 2 segundos
    setTimeout(() => {
      setPgLogo(false);
      //1000 es un segundo 
    }, 5000);
  }, []);
  if (pgLogo){
    return <Logo/>
  }  
  return (
    <DrawerNavigation/>
  )

}

