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
    marginTop: 200,
    width: 110,
    height: 110,
    borderRadius: 400 / 2,
  },

  sobre: {
    alignItems: 'center',
    marginTop: 280,
    marginBottom: 10,
  },

  propriedade: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',

  },

  valor: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 2,

  },

  botaoSeguir: {
    width: 340,
    height: 42,
    backgroundColor: '#62b0d3',
    marginTop: 10,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  botaoEnviar: {
    width: 340,
    height: 42,
    backgroundColor: '#3D4859', // #c5d6e0
    marginTop: 10,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
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