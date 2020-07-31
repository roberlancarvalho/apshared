import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272e39',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight + 16,
  },

  formBuscar: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    zIndex: 5,
    flexDirection: 'row',
    marginTop: 30,
  },

  inputBuscar: {
    flex: 1,
    height: 50,
    backgroundColor: '#fff',
    color: '#333',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 2,
  },

  botaoBuscar: {
    width: 50,
    height: 50,
    backgroundColor: '#62b0d3',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },

  tituloBloco:{
    color: '#fff',
    marginTop: 125,
    position: 'absolute',
    fontSize: 14,
    alignItems: 'center',
  },

  apImg: {
    width: 360,
    height: 190,
    borderRadius: 8,
    padding: 20,
  },

  apList: {
    marginTop: 110,
    paddingLeft: 10,
    paddingRight: 10,
  },

  ap: {
    borderRadius: 5,
    backgroundColor: '#3D4859',
    margin: 5,
  },

  sobre: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 5,
    marginHorizontal: 15,
  },

  apPropriedade: {
    fontSize: 12,
    color: '#fff',
    margin: 5,
  },

  apValor: {
    fontSize: 12,

    margin: 5,
    color: '#fff',
    fontWeight: 'bold'
  },

  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 10,
    margin: 5,
  },

  detailsButtonText: {
    color: '#62b0d3',
    fontSize: 14,
    fontWeight: 'bold',
    margin: 10,
  },
})