import React from 'react'
import Main from './src/components/Main'
import { NativeRouter, Route, Routes } from 'react-router-native'

export default function App () {
  return <NativeRouter><Routes><Route exact path="/" element={<Main/>} /></Routes></NativeRouter>
}
