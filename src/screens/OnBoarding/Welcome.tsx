import React from 'react';
import {View, Text} from 'react-native';
import {commonStyles} from '../../utils/styles';
import {timeOut} from '../../utils';

const Welcome = ({navigation}: any) => {
  // setTimeout(() => navigation.navigate('About'), 5000);
  timeOut(navigation, 'About');
  return (
    <View style={commonStyles.container}>
      <View style={commonStyles.contentContainer}>
        <Text style={commonStyles.title}>Welcome</Text>
        <Text style={commonStyles.text}>New jobs are waiting for you</Text>
      </View>
    </View>
  );
};

export default Welcome;
