import React from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

const HideTabBar = () => {
    const route = useRoute();
    const navigation = useNavigation();
 const tabHiddenRoutes = ["crear","notas"];

 React.useLayoutEffect(() => {
    
   if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
     navigation.setOptions({tabBarStyle: {display: 'none'}});
   } else {
     navigation.setOptions({tabBarStyle: {display: 'flex'}});
   }
 }, [navigation, route]);

 return null;
};

export default HideTabBar;