import React from 'react';
import {View, Text} from 'react-native';
import {commonStyles} from '../../utils/styles';
import {timeOut} from '../../utils';

const About = ({navigation}: any) => {
  timeOut(navigation, 'Tutorials');
  return (
    <View style={commonStyles.container}>
      <View style={commonStyles.contentContainer}>
        <Text style={commonStyles.title}>Edole</Text>
        <Text style={commonStyles.text}>
          Edole means in Togo Local language that There is job. So this App is
          made to help people especially togolese find job in the area the want
          to work
        </Text>
      </View>
    </View>
  );
};

export default About;
