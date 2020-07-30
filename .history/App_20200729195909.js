import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import Routes from './src/routes'
import Stack from '.src/StackNavigator'

export default class App extends Component {
  render() {
    return (
      <>
        <Routes />
        <Stack />
        <StatusBar barStyle="light-content" backgroundColor="#272e39" />
      </>
    )
  }
}
