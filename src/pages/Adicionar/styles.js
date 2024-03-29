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
    marginTop: -90,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },

  title: {
    position: 'absolute',
    fontSize: 20,
    marginBottom: 4,
    marginTop: 150,
    color: '#fff',
    fontWeight: 'bold'
  },

  description: {
    fontSize: 13,
    marginTop: 165,
    lineHeight: 14,
    color: '#ABABAB',
  },

  lista: {
    marginTop: 30,
    backgroundColor: '#272e39',
    paddingHorizontal: 30,

  },

  form: {
   alignItems: 'center',
  },

  input: {
    marginBottom: 4,
    marginTop: 10,
    padding: 10,
    width: 340,
    height: 42,
    backgroundColor: '#fff',
    fontSize: 16,
    borderRadius: 5,
  },

  selecao: {
    height: 42,
    width: 340,
    color: 'black',
    backgroundColor: '#fff',
    padding: 5,
    marginTop: 5,
  },

  botao: {
    width: 340,
    height: 42,
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