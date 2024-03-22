import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
// Assuming homePage.js is within the components folder at the root of your project
import HomePage from './components/homePage.js'; // Corrected import path

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HomePage /> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
