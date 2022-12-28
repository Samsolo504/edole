import React from 'react';
import {View, Text} from 'react-native';
import {commonStyles} from '../../utils/styles';
import {NavigatorScreenParams, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../nav/RootNavigator';

const AuthWelcome = () => {
  const props = useNavigation<NavigatorScreenParams<RootStackParams>>();
  console.log(props);
  setTimeout((): void => props.replace('Launch'), 5000);
  return (
    <View style={commonStyles.container}>
      <View style={commonStyles.contentContainer}>
        <Text style={commonStyles.title}>You're welcome</Text>
        <Text style={commonStyles.text}>Have a good experience</Text>
        <Text style={commonStyles.text}>It is launching Wait a second ...</Text>
      </View>
    </View>
  );
};

export default AuthWelcome;
