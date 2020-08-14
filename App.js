import React from 'react'
import { StatusBar } from 'react-native'
import AppStack from './src/routes/AppStack'


export default function App() {
  return (
    <>
      <AppStack />
      <StatusBar barStyle="light-content" backgroundColor="#272e39" />
    </>
  )
}
