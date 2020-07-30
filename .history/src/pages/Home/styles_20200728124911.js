import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight + 16,
  },

  header: {
    flexDirection: 'column',
    justifyContent: "space-between",
    alignItems: 'center',
  },

  logo:{
    width: 130,
     height: 80,
  },

  headerText: {
    paddingTop: 4,
    fontSize: 14,
    color: '#62b0d3',
  },

  headerTextBold: {
    fontWeight: 'bold',
  },

  title: {
    fontSize: 30,
    marginBottom: 5,
    marginTop: 16,
    color: '#272e39',
    fontWeight: 'bold'
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#737380'
  },

  apImg: {
    width: 300,
    height: 140,
  },

  apList: {
    marginTop: 16,
  },

  ap: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#62b0d3',
    // marginBottom: 16
  },

  apPropriedade: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold'
  },

  apValor: {
    fontSize: 15,
    marginBottom: 4,
    color: '#fff'
  },

  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  detailsButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold'
  }
})