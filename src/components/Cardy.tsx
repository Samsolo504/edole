import React, {useState} from "react";
import {
  View,
  Text, StyleSheet, TouchableNativeFeedback, ImageBackground, TouchableOpacity,
} from "react-native";



const Cardy: React.FC = () => {

  // const [paint, setPaint] = useState("#ccc");

  return (
    <TouchableOpacity>
      <View style={[styles.card, {backgroundColor: "#ccc"}]}>
        <ImageBackground style={styles.cardPicture} source={require("../assets/img/undraw_Passing_by_0un9.png")} />
      </View>
    </TouchableOpacity>
  );
}

export default Cardy;

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    width: 380,
    height: 120,
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    shadowOffset: {
      width: 1.5,
      height: 1,
    },
    shadowRadius: 4,
    shadowColor: "#555",
    shadowOpacity: 0.9,
  },
  cardPicture: {
    width: 100,
    height: 85,
  }
})
