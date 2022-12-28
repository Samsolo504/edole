import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/Authentication/Login';
import SignUp from '../../screens/Authentication/SignUp';
import ForgotPassword from '../../screens/Authentication/ForgotPassword';
import AuthWelcome from '../../screens/Authentication/AuthWelcome';

export type AuthStackParams = {
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  AuthWelcome: undefined;
};

const {Navigator, Screen} = createNativeStackNavigator<AuthStackParams>();

const Authentication = () => {
  return (
    <Navigator screenOptions={{headerShown: false}} initialRouteName="SignUp">
      <Screen name="Login" component={Login} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="ForgotPassword" component={ForgotPassword} />
      <Screen name="AuthWelcome" component={AuthWelcome} />
    </Navigator>
  );
};

export default Authentication;
