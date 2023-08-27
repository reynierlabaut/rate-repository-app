import React from 'react'
import { View } from 'react-native'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'

const Main = () => (
<View style={{ flex: 1 }}>
  <AppBar/>
  <RepositoryList />
</View>
)

export default Main
