import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '25%',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight + 16,
  },
  
  header: {
    flexDirection: 'column',
    justifyContent: "space-between",
    alignItems: 'center',
  },
  
  headerText: {
    paddingTop: Constants.statusBarHeight + 5,
    fontSize: 18,
    color: '#62b0d3'
  }
})