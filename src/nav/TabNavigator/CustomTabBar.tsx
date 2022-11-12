import React from 'react';
import {BottomTabBar} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';

const CustomTabBar = (props: any) => {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fefefe',
        borderRadius: 25,
        paddingTop: 20,
      }}
      // blurType="dark"
      // blurAmount={10}
      // blurRadius={25}
      // overlayColor="transparent"
    >
      <BottomTabBar {...props} />
    </View>
  );
};

export default CustomTabBar;
