import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import DynamicScreen from './src/screens/DynamicScreen';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#8e44ad" />
      <DynamicScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#8e44ad',
  },
});

export default App;