import React from 'react';
import Main from './src/components/Main';
import {NativeRouter, Route, Routes} from 'react-router-native';
import {StatusBar} from 'expo-status-bar';
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NativeRouter>
        <Routes>
          <Route exact path="/*" element={<Main />} />
        </Routes>
      </NativeRouter>
    </>
  );
}
