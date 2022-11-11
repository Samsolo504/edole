import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/TabScreens/HomeTab/HomeScreen";
import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';

const screenOptions = (route, color) => {
  let iconName;

  switch (route.name) {
    case 'Home':
      iconName = 'house';
      break;
    case 'ProposalManagement':
      iconName = '';
      break;
    case 'MapsViewer':
      iconName = '';
      break;
    case 'Chat':
      iconName = '';
      break;
    case 'Profile':
      iconName = '';
      break;
    default:
      break;
  }

  return <Icon name={iconName} color={color} size={24} />;
};

const BottomNavigator = createBottomTabNavigator()

export const Navigator = () => {
  return (
    <BottomNavigator.Navigator
      initialRouteName="MapsViewer"
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => screenOptions(route, color),
      })}>
      <BottomNavigator.Screen name="Home" component={HomeScreen} />
      <BottomNavigator.Screen name="ProposalManagement" component={HomeScreen} />
      <BottomNavigator.Screen name="MapsViewer" component={HomeScreen} />
      <BottomNavigator.Screen name="Chat" component={HomeScreen} />
      <BottomNavigator.Screen name="Profile" component={HomeScreen} />
    </BottomNavigator.Navigator>
  )
}

