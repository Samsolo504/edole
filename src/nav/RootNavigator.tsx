import * as React from 'react';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import OnBoarding from './OnBoarding';
import Authentication from './Authentication';

// export type RootStackParams = {
//   ExploreStack: undefined;
//   RestaurantsStack: NavigatorScreenParams<RestaurantsStackParams>;
//   Profile: undefined;
//   Restaurant: {
//     name: string;
//   };
// };

export type RootStackParams = {
  FirstLaunched: undefined;
  AuthStack: NavigatorScreenParams<any>;
  Launched: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="FirstLaunched" component={OnBoarding} />
        <RootStack.Screen name="AuthStack" component={Authentication} />
        <RootStack.Screen name="Launched" component={TabNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
