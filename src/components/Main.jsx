import React from 'react';
import {View, Text} from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import {Route, Routes, Navigate} from 'react-router-native';

const Main = () => (
  <View style={{flex: 1}}>
    <AppBar />
    <Routes>
      <Route path="/" exact element={<RepositoryList />}></Route>
      <Route path="/signin" exact element={<Text>working on it</Text>}></Route>
      <Route
        path="/home"
        exact
        element={
          <Text style={{fontSize: 80, paddingHorizontal: 20}}>wellcome</Text>
        }></Route>
    </Routes>
    {/* <Navigate to="/" /> */}
  </View>
);

export default Main;
