import { StatusBar as ExpoStausBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import {Searchbar} from 'react-native-paper';
import {ResturantScreen} from './src/features/resturants/screen/resturantscreen';

const isAndroid = Platform.OS === 'android';

export default function App() {
  return (
    <>
    <ResturantScreen/>

<ExpoStausBar style="auto" />
    </>
    

  );
}


