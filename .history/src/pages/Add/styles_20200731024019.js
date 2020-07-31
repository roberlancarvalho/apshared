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
    marginTop: -170,
    color: '#fff',
    fontWeight: 'bold'
  },

  description: {
    fontSize: 13,
    lineHeight: 15,
    color: '#ABABAB',
    marginHorizontal: 10,
  },

  lista: {
    marginTop: 40,
    marginHorizontal: 10,
    marginEnd: 10,
  },

  form: {
    marginTop: 5,
    position: 'relative',
  },

  input: {
    marginBottom: 4,
    marginTop: 10,
    padding: 10,
    width: 340,
    height: 40,
    backgroundColor: '#fff',
    fontSize: 16,
    borderRadius: 5
  },

  selecao: {
    height: 40,
    width: 340,
    color: '#fff',
    padding: 5,
    marginTop: 5,
    // backgroundColor: '#62b0d3',
  },

  botao: {
    width: 340,
    height: 40,
    backgroundColor: '#62b0d3',
    marginTop: 10,
    marginVertical: 60,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },

  botaoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
})