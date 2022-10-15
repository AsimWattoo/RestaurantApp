/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import styles from './Styles';
import {s as tw} from "react-native-wind"

const App = () => {
  return (
    <SafeAreaView style={tw`flex justify-center`}>
      <Text style={tw`text-center rounded mx-10 mt-5 p-2 text-xl bg-blue-600 text-green-500`}>Hello</Text>
      <Text style={tw`mt-10`}>Welcome</Text>
    </SafeAreaView>
  );
};

export default App;
