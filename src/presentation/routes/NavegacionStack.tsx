import React from 'react'
import {Text, View} from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home/Home';
import Archivos from '../screens/archivos/Archivos';
import Archivo from '../screens/archivos/Archivo';
import Nuevo from '../screens/archivos/Nuevo';
import Buscar from '../screens/archivos/Archivos';

const Stack = createStackNavigator();

const NavegacionStack = () => {

  return (
    <Stack.Navigator
    
    >
      <Stack.Screen name="Home" component={Home} 
      options={{title:'INICIO'}} />
      <Stack.Screen name="Archivos" component={Archivos}
      options={{title:'Historial'}} />
      <Stack.Screen name="Archivo" component={Archivo} 
      options={{title:'Archivo'}}/>
      <Stack.Screen name="Nuevo" component={Nuevo} 
      options={{title:'Nuevo'}}/>
     

    </Stack.Navigator>
  );
}

export default NavegacionStack