import React from "react";
import {
  FlatList, StyleSheet,
  Text,
  View,
} from "react-native";
import { commonStyle } from "../../../assets/style";
import Cardy from "../../../components/Cardy";
import Card from "../../../components/Card";

const HomeScreen = () => {
  const featuredJobArray = ["yellow", "skyBlue", "pink", "purple"];

  const remoteJobArray = ["yellow", "skyBlue", "pink", "purple"];
  return (
    <View style={commonStyle.screenContainer}>
      <View style={styles.sectionTitle}>
        <Text style={styles.bigTitle}>Featured Jobs</Text>
        <Text>See All</Text>
      </View>

      <FlatList style={styles.sectionContainer} data={featuredJobArray} renderItem={Card} horizontal showsHorizontalScrollIndicator={false} />
      <View style={styles.sectionTitle}>
        <Text style={styles.bigTitle}>Remote Jobs</Text>
        <Text>See All</Text>
      </View>
      <FlatList style={styles.sectionContainer} data={remoteJobArray} renderItem={Cardy} showsVerticalScrollIndicator={false}/>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  sectionContainer: {
    marginVertical: 2
  },
  sectionTitle: {
    width: "85%",
    flexDirection: "row",
    justifyContent: "space-between",

  },
  bigTitle: {
    color: "#282864",
    fontWeight: "700",
    fontSize: 20
  }
  }
)

