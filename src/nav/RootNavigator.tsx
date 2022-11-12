import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import OnBoarding from './OnBoarding';
import Authentication from './Authentication';

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="FirstLaunched" component={OnBoarding} />
        <RootStack.Screen name="Auth" component={Authentication} />
        <RootStack.Screen name="Launched" component={TabNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
