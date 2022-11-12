import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {Navigator, Screen} = createNativeStackNavigator();

const Authentication = () => {
  return (
    <Navigator>
      <Screen name="Login" component={} />
      <Screen name="SignUp" component={} />
      <Screen name="ForgotPassword" component={} />
      <Screen name="AuthWelcome" component={} />
    </Navigator>
  );
};

export default Authentication;
