import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '../screens/home/Home';


import About from '../screens/about/About';


const Tab = createMaterialTopTabNavigator();


const NavegacionTop = () => {


  return (
    
    <Tab.Navigator>

      <Tab.Screen name="Home" component={Home} />
      
      <Tab.Screen name="About" component={About} />

    </Tab.Navigator>
    
  );
}

export default NavegacionTop