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
    width: 220,
    height: 94,
    justifyContent: 'center',
    zIndex: 5,
    marginTop: -90,
    marginBottom: 110,
  },

  seta: {
    flexDirection: 'row',
    marginLeft: -350,
    justifyContent: "space-between",
    marginTop: 5,
  },

  conteudo: {
    marginTop: 90,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  sucesso: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },

  sucessoText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: -80,
  },

  description: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
    marginLeft: -40,
    marginTop: -38,
  },

  botao: {
    width: 340,
    height: 54,
    backgroundColor: '#62b0d3',
    marginTop: 140,
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