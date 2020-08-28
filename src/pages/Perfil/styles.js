import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272e39',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Constants.statusBarHeight + 16,
  },

  imgBackground: {
    width: '100%',
    height: 140,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },

  logo: {
    width: 170,
    height: 70,
    position: 'absolute',
    justifyContent: 'center',
    zIndex: 5,
    marginTop: 30,
  },

  conteudo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },

  title: {
    fontSize: 20,
    marginBottom: 4,
    marginTop: 200,
    color: '#fff',
    fontWeight: 'bold'
  },

  avatar: {
    position: 'absolute',
    marginTop: 190,
    width: 90,
    height: 90,
    borderRadius: 400 / 2,
  },

  sobre: {
    marginTop: 250,
    flexWrap: 'wrap',
  },

  propriedade: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    height: 30,
  },

  valor: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'normal',
    height: 30,
  },

  face: {
    fontSize: 16,
    color: '#62b0d3',
    textDecorationLine: 'underline',
  },

  insta: {
    fontSize: 16,
    color: '#62b0d3',
    textDecorationLine: 'underline',
  },

  botoes:{
    paddingTop: 2,
  },

  botaoEditar: {
    width: 340,
    height: 46,
    backgroundColor: '#96a0a6', // #c5d6e0
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 35,
  },

  botaoMensagens: {
    width: 340,
    height: 46,
    backgroundColor: '#62b0d3',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 15,
  },

  botaoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },

  icone: {
    marginHorizontal: 10,
    fontSize: 22,
    color: 'white'
  },
})