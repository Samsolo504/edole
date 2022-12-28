import React from 'react';
import {View, Text} from 'react-native';
import { commonStyles } from "../../utils/styles";

const ForgotPassword = () => {
  return (
    <View style={commonStyles.container}>
      <View style={commonStyles.contentContainer}>
        <Text style={commonStyles.title}>Forgot Password</Text>
        <Text style={commonStyles.text}>Did you forget your Password?</Text>
        <Text style={commonStyles.text}>
          Wait for the Next release this Feature is still in Development
        </Text>
      </View>
    </View>
  );
};

export default ForgotPassword;
