import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';

import {data} from './data';
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const {width} = Dimensions.get('screen');

const ITEM_WIDTH = width * 0.9;
const ITEM_HEIGHT = ITEM_WIDTH * 0.9;

const Chat = () => {
  const tabBarheight = useBottomTabBarHeight();
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Home</Text>
      </View>

      {/* Scrollable Content */}
      <View style={styles.scrollContainer}>
        <ScrollView
          indicatorStyle="white"
          contentContainerStyle={[
            styles.scrollContentContainer,
            {paddingBottom: tabBarheight},
          ]}>
          {data.map((item) => (
            <View key={item.id} style={styles.imageContainer}>
              <Image
                style={styles.imageCard}
                source={{uri: item.image_url}}
                resizeMode="cover"
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
  },
  contentContainer: {
    marginTop: 50,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 20,
    color: '#fff',
  },
  scrollContainer: {

    flex: 1,
  },
  scrollContentContainer: {
    alignItems: 'center',
  },
  imageContainer: {
    marginBottom: 14,
  },
  imageCard: {
    borderRadius: 14,
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
  },
});

//
//
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const Chat = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.contentContainer}>
//         <Text style={styles.title}>Browse</Text>
//       </View>
//     </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#0f0f0f',
//   },
//   contentContainer: {
//     marginTop: 50,
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 20,
//     color: '#fff',
//   },
// });
//
// export default Chat;
