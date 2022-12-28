import * as React from 'react';
import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator, {BottomTabParams} from '../TabNavigator';
import AuthWelcome from '../../screens/Authentication/AuthWelcome';

// export type RootStackParams = {
//   ExploreStack: undefined;
//   RestaurantsStack: NavigatorScreenParams<RestaurantsStackParams>;
//   Profile: undefined;
//   Restaurant: {
//     name: string;
//   };
// };

export type RootStackParams = {
  AuthWelcome: {
    launch: () => {};
  };
  Launch: NavigatorScreenParams<BottomTabParams>;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name="AuthWelcome" component={AuthWelcome} />
      <RootStack.Screen name="Launch" component={TabNavigator} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
