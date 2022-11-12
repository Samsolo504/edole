import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/TabScreens/HomeTab/HomeScreen';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomTabBar from './CustomTabBar';

export type BottomTabParams = {
  Home: undefined;
  ProposalManagement: undefined;
  MapsViewer: undefined;
  Chat: undefined;
  Profile: undefined;
}
const screenOptions = (route: any, color: string) => {
  let iconName;

  switch (route.name) {
    case 'Home':
      iconName = 'house';
      return <Icon name={iconName} color={color} size={24} />;
      // eslint-disable-next-line no-unreachable
      break;

    case 'ProposalManagement':
      iconName = '';
      return <Icon name={iconName} color={color} size={24} />;
      // eslint-disable-next-line no-unreachable
      break;

    case 'MapsViewer':
      iconName = '';
      return <Icon name={iconName} color={color} size={24} />;
      // eslint-disable-next-line no-unreachable
      break;

    case 'Chat':
      iconName = '';
      return <Icon name={iconName} color={color} size={24} />;
      // eslint-disable-next-line no-unreachable
      break;

    case 'Profile':
      iconName = '';
      return <Icon name={iconName} color={color} size={24} />;
      // eslint-disable-next-line no-unreachable
      break;

    default:
      break;
  }
};

const BottomNavigator = createBottomTabNavigator<BottomTabParams>();

const TabNavigator = () => {
  return (
    <BottomNavigator.Navigator
      initialRouteName="MapsViewer"
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => screenOptions(route, color),
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#d9d9d9',
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopColor: '#66666666',
          backgroundColor: 'transparent',
          elevation: 0,
        },
      })}
      tabBar={props => <CustomTabBar {...props} />}>
      <BottomNavigator.Screen name="Home" component={HomeScreen} />
      <BottomNavigator.Screen
        name="ProposalManagement"
        component={HomeScreen}
      />
      <BottomNavigator.Screen name="MapsViewer" component={HomeScreen} />
      <BottomNavigator.Screen name="Chat" component={HomeScreen} />
      <BottomNavigator.Screen name="Profile" component={HomeScreen} />
    </BottomNavigator.Navigator>
  );
};

export default TabNavigator;
