import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import Routes from './src/routes'
import StackNavigator from '.src/StackNavigator'

export default class App extends Component {
  render() {
    return (
      <>
        <Routes />
        <StackNavigator />
        <StatusBar barStyle="light-content" backgroundColor="#272e39" />
      </>
    )
  }
}
