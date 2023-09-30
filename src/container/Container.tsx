import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from '../../RootNavigation';
import SlapScreen1 from '../screen/slapScreen/SlapScreen1';
import Information from '../screen/information/Information';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Container;
