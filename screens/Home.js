import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList
} from "react-native";
import { COLORS } from "../constants";

const Home = () => {

  function renderHeader() {
    
  }

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1
  }
})

export default Home;