import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomBarComponent from './BottomBar';
import MyComponent from './MyComponent';
import AppBarComponent from './AppBar';
import { Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
   
  return (
    <SafeAreaProvider>

    <NavigationContainer>
      <AppBarComponent/>
    {/* <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
      Press me
      </Button>
      <BottomBarComponent/> */}
  <MyComponent/>
    {/* </View> */}
    </NavigationContainer>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
