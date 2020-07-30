import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272e39',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight + 16,
  },

  header: {
    flexDirection: 'column',
    justifyContent: "space-between",
    alignItems: 'center',
  },

  logo:{
    width: 170,
     height: 70,
  },

  headerText: {
    paddingTop: 4,
    fontSize: 11,
    color: '#62b0d3',
  },

  headerTextBold: {
    fontWeight: 'bold',
  },

  title: {
    fontSize: 26,
    marginBottom: 2,
    marginTop: 12,
    color: '#fff',
    fontWeight: 'bold'
  },

  description: {
    fontSize: 14,
    lineHeight: 24,
    color: '#ABABAB'
  },

  apImg: {
    width: 300,
    height: 140,
    borderRadius: 8,
  },

  apList: {
    marginTop: 16,
    marginHorizontal: 25,
  },

  ap: {
    padding: 10,
    marginBottom: 18,
    borderRadius: 8,
    backgroundColor: '#3D4859',
    // marginBottom: 16
  },

  sobre:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 10,
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
    alignItems: 'center',
  },
  detailsButtonText: {
    color: '#62b0d3',
    fontSize: 15,
    fontWeight: 'bold',
    padding: 10
  }
})