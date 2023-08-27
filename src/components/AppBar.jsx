import React from 'react'
import { View, StyleSheet } from 'react-native'
import StylesText from './StylesText'
import Constants from 'expo-constants'
import theme from '../theme'

const AppBar = () => {
  return (
        <View style={styles.appBar}>
            <StylesText fontWeight="bold" style={styles.text}>
                Repository
            </StylesText>
        </View>
  )
}

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: theme.appBar.colorPrimary,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingLeft: 10
  },
  text: {
    color: theme.appBar.textPrimary
  }
})

export default AppBar
