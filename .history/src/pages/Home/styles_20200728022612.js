import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '25%',
    paddingTop: Constants.statusBarHeight + 18,
  },
  
  header: {
    flexDirection: 'row'
  }
})