import React from 'react';
import { NativeBaseProvider } from 'native-base';
// import { SafeAreaView } from 'react-native';
import ApplicationNavigator from './navigators/Application';

export default function App() {
  return (
    <NativeBaseProvider>
      <ApplicationNavigator />
    </NativeBaseProvider>
  );
}
