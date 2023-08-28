import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import StylesText from './StylesText';
import Constants from 'expo-constants';
import theme from '../theme';
import {Link, useLocation} from 'react-router-native';

const AppBarTab = ({to, children}) => {
  const {pathname} = useLocation();
  const active = pathname === to;
  const textStyles = [styles.text, active && styles.active];
  return (
    <Link to={to}>
      <StylesText fontWeight="bold" style={textStyles}>
        {children}
      </StylesText>
    </Link>
  );
};
const AppBar = () => {
  return (
    <View style={styles.appBar}>
      <ScrollView horizontal style={styles.scroll}>
        <AppBarTab to="/">Repository</AppBarTab>
        <AppBarTab to="/signin">Sing In</AppBarTab>
        <AppBarTab to="/home">Home</AppBarTab>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: theme.appBar.colorPrimary,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingLeft: 10,
    flexDirection: 'row-reverse',
  },
  text: {
    color: theme.appBar.textSecondary,
    paddingHorizontal: 10,
  },
  active: {
    color: theme.appBar.textPrimary,
  },
  scroll: {
    paddingBottom: 15,
  },
});

export default AppBar;
