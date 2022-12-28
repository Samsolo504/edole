import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/TabScreens/HomeTab/HomeScreen';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomTabBar from './CustomTabBar';
import {Colors} from '../../utils/constants';
import Proposal from '../../screens/TabScreens/ProposalTab/Proposal';
import MapsScreen from '../../screens/TabScreens/MapsTab/MapsScreen';
import ProfileScreen from '../../screens/TabScreens/ProfileTab/ProfileScreen';
import ChatScreen from '../../screens/TabScreens/ChatTab/ChatScreen';

export type BottomTabParams = {
  Home: undefined;
  ProposalManagement: undefined;
  MapsViewer: undefined;
  Chat: undefined;
  Profile: undefined;
};
const screenOptions = (route: any, color: string) => {
  let iconName;

  // if (route.name === 'Home') {
  //     iconName = 'ios-radio-sharp';
  //     return <Icon name={iconName} color={color} size={24} />;
  //   } else if (route.name === 'ProposalManagement') {
  //     iconName = 'ios-pencil';
  //     return <Icon name={iconName} color={color} size={24} />;
  //   } else if (route.name === 'MapsViewer') {
  //     iconName = 'ios-pizza';
  //     return <Icon name={iconName} color={color} size={24} />;
  //   } else if (route.name === 'Chat') {
  //     iconName = 'ios-notifications';
  //     return <Icon name={iconName} color={color} size={24} />;
  //   } else if (route.name === 'Profile') {
  //     iconName = 'ios-newspaper';
  //     return <Icon name={iconName} color={color} size={24} />;
  //   } else {
  //   }
  // };

  switch (route.name) {
    case 'Home':
      iconName = 'ios-radio-sharp';
      return <Icon name={iconName} color={color} size={24} />;
      break;
    case 'ProposalManagement':
      iconName = 'ios-pencil';
      return <Icon name={iconName} color={color} size={24} />;
      break;

    case 'MapsViewer':
      iconName = 'ios-pizza';
      return <Icon name={iconName} color={color} size={24} />;
      break;

    case 'Chat':
      iconName = 'ios-notifications';
      return <Icon name={iconName} color={color} size={24} />;
      break;

    case 'Profile':
      iconName = 'ios-newspaper';
      return <Icon name={iconName} color={color} size={24} />;
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
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.blue,
        tabBarLabel: '',
        tabBarStyle: {
          borderTopColor: '#66666666',
          backgroundColor: 'transparent',
          elevation: 0,
        },
      })}
      tabBar={props => <CustomTabBar {...props} />}>
      <BottomNavigator.Screen name="Home" component={HomeScreen} />
      <BottomNavigator.Screen name="ProposalManagement" component={Proposal} />
      <BottomNavigator.Screen name="MapsViewer" component={MapsScreen} />
      <BottomNavigator.Screen name="Chat" component={ChatScreen} />
      <BottomNavigator.Screen name="Profile" component={ProfileScreen} />
    </BottomNavigator.Navigator>
  );
};

export default TabNavigator;
