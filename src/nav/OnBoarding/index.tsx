import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {Navigator, Screen} = createNativeStackNavigator();

const OnBoarding = () => {
  return (
    <Navigator>
      <Screen name="Welcome" component={} />
      <Screen name="IsAbout" component={} />
      <Screen name="Usage" component={} />
    </Navigator>
  );
};

export default OnBoarding;
