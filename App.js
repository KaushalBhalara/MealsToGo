import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <View style={styles.searchcontainer}>
      <Text>Search</Text>
      </View>
      <View style={styles.listcontainer}>
      <Text>List</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchcontainer:{
    backgroundColor:'green',
    padding:16,
  },
  listcontainer:{
    flex:1,
    padding:16,
    backgroundColor:'red',
  },
});
