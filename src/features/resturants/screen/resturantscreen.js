import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { ResturantInfoCardComponent } from "../component/resturantinfocard.component";

export const ResturantScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchcontainer}>
        <Searchbar></Searchbar>
      </View>
      <View style={styles.listcontainer}>
        <ResturantInfoCardComponent />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchcontainer: {
    padding: 16,
  },
  listcontainer: {
    flex: 1,
    padding: 16,
    backgroundColor: "red",
  },
});
