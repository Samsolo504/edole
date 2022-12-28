import React from 'react';
import {View, Text} from 'react-native';
import {commonStyles} from '../../utils/styles';

const Tutorials = () => {
  return (
    <View style={commonStyles.container}>
      <View style={commonStyles.contentContainer}>
        <Text style={commonStyles.title}>Tutorials</Text>
        <Text style={commonStyles.text}>
          This is how you are going to use this App
        </Text>
      </View>
    </View>
  );
};

export default Tutorials;
