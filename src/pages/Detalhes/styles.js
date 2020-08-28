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

  logo: {
    width: 170,
    height: 70,
    marginTop: -15,
  },

  seta: {
    flexDirection: 'row',
    marginLeft: -350,
    justifyContent: "space-between",
    marginTop: -15,
  },

  headerText: {
    paddingTop: 4,
    fontSize: 13,
    color: '#ABABAB',
  },

  headerTextBold: {
    fontWeight: 'bold',
  },

  title: {
    fontSize: 22,
    marginBottom: 10,
    marginTop: 30,
    color: '#fff',
    fontWeight: 'bold'
  },

  apImg: {
    width: 150,
    height: 120,
    margin: 10,
    flexDirection: 'row',
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
    marginTop: 10,
  },
  detailsButtonText: {
    color: '#62b0d3',
    fontSize: 15,
    fontWeight: 'bold',
  }
})