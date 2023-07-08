/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import PersonInfo from './src/components/PersonInfo';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'} //文字颜色
        backgroundColor={backgroundStyle.backgroundColor}
        animated={true}
        translucent={false} // true 状态栏会遮盖到页面上
        hidden={false}
      />
      <PersonInfo />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
