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
    marginTop: 50,
    paddingTop: 130,
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

  form: {
    alignItems: 'center'
  },

  input: {
    marginBottom: 5,
    marginTop: 60,
    marginTop: 10,
    padding: 10,
    width: 340,
    height: 42,
    backgroundColor: '#fff',
    fontSize: 16,
    borderRadius: 3,
    paddingLeft: 0,

  },

  // inputSenha: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#fff'
  // },

  recuperar: {
    paddingBottom: 10,
  },

  links: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },

  link: {
    fontSize: 14,
    color: '#62b0d3',
    fontWeight: 'bold',
    paddingHorizontal: 36,
  },

  botao: {
    width: 340,
    height: 42,
    backgroundColor: '#62b0d3',
    marginTop: 10,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },

  botaoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },

  alternativaLogin: {
    fontSize: 14,
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
    paddingHorizontal: 10,
  },

  google: {
    paddingHorizontal: 10,
  },
})