import React from 'react'
import { StatusBar } from 'react-native'
// import { View } from 'react-native'
import Routes from './src/routes'

export default function App() {
  return (
    <>
    {/* <View style={styles.container}></View> */}
    <Routes />
    <StatusBar barStyle="light-content" />
    </>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#272e39'
//   }
// })
