import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: '25%',
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
    fontSize: 14,
    color: '#62b0d3',
  },

  headerTextBold: {
    fontWeight: 'bold',
  },

  title: {
    fontSize: 30,
    marginBottom: 5,
    marginTop: 48,
    color: '#272e39',
    fontWeight: 'bold'
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#737380'
  },

  apImg: {
    width: 80%,
    
  }
})