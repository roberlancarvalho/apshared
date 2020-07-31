import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272e39',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight + 1,
  },

  imgBackground: {
    width: '100%',
    height: '35%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 170,
    height: 70,
    position: 'absolute',
    zIndex: 5,
    flexDirection: 'row',
    marginTop: 55,
  },

  conteudo: {
    marginTop: -90,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },

  title: {
    fontSize: 20,
    marginBottom: 4,
    marginTop: -70,
    color: '#fff',
    fontWeight: 'bold'
  },

  description: {
    fontSize: 13,
    lineHeight: 15,
    color: '#ABABAB',
    marginHorizontal: 10,
  },

  apList: {
    marginTop: 16,
    marginHorizontal: 10,
  },

  ap: {
    paddingHorizontal: 15,
    paddingVertical: -10,
    // marginBottom: 5,
    borderRadius: 5,
    backgroundColor: '#3D4859',
    margin: 5,
  },

  sobre: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 1,
    marginHorizontal: 5,
  },

  apPropriedade: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold'
  },

  apValor: {
    fontSize: 12,
    marginBottom: 2,
    color: '#fff'
  },

  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  detailsButtonText: {
    color: '#62b0d3',
    fontSize: 14,
    fontWeight: 'bold',
    margin: 10,
  }
})