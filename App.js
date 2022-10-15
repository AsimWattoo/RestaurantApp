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
import styles from "./Styles";

const App = () => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>Hello</Text>
    </SafeAreaView>
  );
};

export default App;
