import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272e39',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight + 1,
  },

  seta: {
    flexDirection: 'row',
    marginLeft: -350,
    justifyContent: "space-between",
    marginTop: 5,
  },

  icones: {
    flexDirection: 'row',
    marginTop: -15,
    marginLeft: 290,
  },

  i: {
    marginRight: 5
  },

  ii: {
    marginRight: 5
  },

  iii: {
    marginRight: 5
  },

  conteudo: {
    marginTop: 90,
    paddingTop: 20,
    // flex: 1,
    // position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },

  topo: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  title: {
    fontSize: 32,
    color: '#62b0d3',
    paddingRight: 145,
    fontWeight: 'bold',
    marginStart: 45,
  },

  description: {
    marginStart: 45,
    marginEnd: 100,
    marginTop: 10,
    paddingRight: 55,
    fontSize: 14,
    color: '#fff',
  },

  formTitle: {
    fontSize: 22,
    color: '#62b0d3',
    fontWeight: 'bold',
    marginTop: 60,
    marginStart: -130,
  },

  form: {
    marginTop: 30,
  },

  input: {
    marginBottom: 4,
    // marginTop: 90,
    marginTop: 10,
    padding: 10,
    width: 340,
    height: 44,
    backgroundColor: '#fff',
    fontSize: 14,
    borderRadius: 8,
    paddingLeft: 21,
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
})