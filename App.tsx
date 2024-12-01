import './gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/presentation/screens/login/Login';
import Home from './src/presentation/screens/home/Home';
import Archivos from './src/presentation/screens/archivos/Archivos';
import Nuevo from './src/presentation/screens/archivos/Nuevo';
import FormularioModal from './src/presentation/screens/login/FormularioModal';
import NavegacionStack from './src/presentation/routes/NavegacionStack';
import NavegacionTop from './src/presentation/routes/NavegacionTop';
import { SafeAreaView } from 'react-native';



const App = () => {


  return (
    
    <NavigationContainer>
      

      <NavegacionTop />
      
      
      
      </NavigationContainer>
      
    
  );
};



export default App;
