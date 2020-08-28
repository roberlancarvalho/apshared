import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272e39',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight + 1,
  },

  logo: {
    width: 190,
    height: 82,
    justifyContent: 'center',
    zIndex: 5,
    paddingTop: 10,
    marginBottom: 75,
  },

  conteudo: {
    marginTop: 90,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  topo: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },

  fazerLogin: {
    fontSize: 20,
    color: '#fff',
    paddingRight: 105,
    fontWeight: 'bold',
    marginEnd: 5,
    alignSelf: 'flex-start'
  },

  criarConta: {
    marginEnd: 5,
    alignSelf: 'flex-end',
  },

  criarContaTexto: {
    fontSize: 16,
    color: '#62b0d3',
    fontWeight: 'bold',
  },

  form: {
    alignItems: 'center'
  },

  input: {
    marginBottom: 4,
    marginTop: 60,
    marginTop: 10,
    padding: 10,
    width: 340,
    height: 44,
    backgroundColor: '#fff',
    fontSize: 14,
    borderRadius: 8,
    paddingLeft: 21,
  },

  label: {
    marginLeft: 2,
    color: '#fff',
  },

  recuperarTexto: {
    paddingBottom: 10,
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },

  links: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },

  recuperar: {
    paddingTop: 4,
    marginBottom: 4,
    alignSelf: 'flex-end',
    marginLeft: 40
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: 'center',
    marginBottom: 10,
    marginRight: 65,
    marginLeft: -10,
  },

  checkbox: {
    alignSelf: "center",
  },

  botao: {
    width: 340,
    height: 44,
    backgroundColor: '#62b0d3',
    marginTop: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  botaoText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },

  alternativaLogin: {
    fontSize: 14,
    marginTop: 10,
    lineHeight: 24,
    color: '#ABABAB',
  },

  sociaisIcons: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 20,

  },

  facebook: {
    padding: 10,
    margin: 10,
    height: 40,
    width: 40,
    resizeMode: 'stretch',
  },

  google: {
    padding: 10,
    margin: 10,
    height: 40,
    width: 40,
    resizeMode: 'stretch',
  },
})