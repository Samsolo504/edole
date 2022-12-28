// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * Generated with the TypeScript template
//  * https://github.com/react-native-community/react-native-template-typescript
//  *
//  * @format
//  */
//
// import React from 'react';
// import {
//   StyleSheet,
//   View,
//   Text, TouchableOpacity,
// } from "react-native";
// import {NavigationContainer} from '@react-navigation/native'
// import {createNativeStackNavigator} from "@react-navigation/native-stack";
// import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
// import HomeScreen from "./src/screens/TabScreens/HomeTab/HomeScreen";
//
// const RootStack = createNativeStackNavigator();
// const SplashScreen = ({navigation }) => {
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={() => navigation.navigate('MainApp')}>
//         <Text style={styles.title}>Edole</Text>
//       </TouchableOpacity>
//
//     </View>
//   )
// }
//
//
// const App = () => {
//   // const isDarkMode = useColorScheme() === 'dark';
//   //
//   // const backgroundStyle = {
//   //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   // };
//
//   return (
//     <NavigationContainer>
//       <RootStack.Navigator screenOptions={
//         { headerShown: false }
//       }>
//         <RootStack.Screen name="SplashScreen" component={SplashScreen} />
//         <RootStack.Screen name="MainApp" component={Navigator} />
//       </RootStack.Navigator>
//     </NavigationContainer>
//   );
// };
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#336099",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: "700",
//     color: "#fff"
//   }
// });
//
// export default App;

import React from 'react';
import {StatusBar} from 'react-native';
import {Provider as ReduxProvider} from 'react-redux';

// import Index from './navOneSource/navigation/Index';
import store from './src/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import NavigationFlow from './src/nav';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <StatusBar hidden />
        <NavigationFlow />
      </NavigationContainer>
    </ReduxProvider>
  );
};

export default App;
