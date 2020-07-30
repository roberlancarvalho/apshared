import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import Routes from './src/routes'

export default class App extends Component {
  render() {

    return (
      <>
        <Routes />
        <StatusBar barStyle="light-content" backgroundColor="#272e39" />
      </>
    )
  }
}
