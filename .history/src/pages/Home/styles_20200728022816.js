import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: '25%',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight + 18,
  },
  
  header: {
    flexDirection: 'column',
    justifyContent: "space-between"

  }
})