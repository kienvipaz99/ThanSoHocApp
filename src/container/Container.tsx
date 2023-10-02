import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from '../../RootNavigation';
import SlapScreen1 from '../screen/slapScreen/SlapScreen1';
import Information from '../screen/information/Information';
import Home from '../screen/home/Home';
import Setting from '../screen/setting/Setting';
import Numerology from '../screen/numerology/Numerology';

const Container = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={'SlapScreen1'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SlapScreen1" component={SlapScreen1} />
        <Stack.Screen name="Information" component={Information} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="Numerology" component={Numerology} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Container;
