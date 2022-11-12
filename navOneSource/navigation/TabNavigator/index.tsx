import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';


import Browse from '../../screens/TabScreens/MapsTab/Maps';
import Library from '../../screens/TabScreens/ProfileTab/Profile';
import CustomTabBar from './CustomTabBar';
import ChatScreen from '../../screens/TabScreens/ChatTab/ChatScreen';

const Tab = createBottomTabNavigator();



const screenOptions = (route: any, color: string) => {
  let iconName;

  switch (route.name) {
    case 'Home':
      iconName = 'home';
      break;
    case 'Browse':
      iconName = 'appstore-o';
      break;
    case 'Library':
      iconName = 'folder1';
      break;
    default:
      break;
  }

  return <Icon name={iconName} color={color} size={24} />;
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
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
        }
      })}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      {/* rest remains same */}
      <Tab.Screen name="Home" component={ChatScreen} options={() => ({
        headerShown: false,
      })} />
      <Tab.Screen name="Browse" component={Browse} />
      <Tab.Screen name="Library" component={Library} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
