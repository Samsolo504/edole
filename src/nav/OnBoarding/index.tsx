import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../../screens/OnBoarding/Welcome';
import About from '../../screens/OnBoarding/About';
import Tutorials from '../../screens/OnBoarding/Tutorials';

export type OnBoardingStackParams = {
  Welcome: undefined;
  About: undefined;
  Tutorials: undefined;
};

const {Navigator, Screen} = createNativeStackNavigator<OnBoardingStackParams>();

const OnBoarding = () => {
  return (
    <Navigator initialRouteName="Welcome">
      <Screen name="Welcome" component={Welcome} />
      <Screen name="About" component={About} />
      <Screen name="Tutorials" component={Tutorials} />
    </Navigator>
  );
};

export default OnBoarding;
