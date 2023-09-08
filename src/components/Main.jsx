import React from 'react';
import {View, Text, Platform} from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import {Route, Routes, Navigate} from 'react-router-native';
import LogInPage from '../pages/Login';

const Main = () => (
  <View style={{flex: 1}}>
    <AppBar />
    <Routes>
      <Route path="/" exact element={<RepositoryList />}></Route>
      <Route path="/signin" exact element={<LogInPage />}></Route>
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

//Info: para ejecutar un componente diferente en multiples plataformas
// usando platform de react-native
// const AppBar = Platform.select({
//   ios: () => require('./IOSAppBar.jsx').default,
//   default: () => require('./AppBar.jsx'),
// })()

export default Main;
