import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272e39',
    alignItems: 'center',
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
    marginTop: -150,
    color: '#fff',
    fontWeight: 'bold'
  },

  avatar: {
    position: 'absolute',
    marginTop: 200,
    width: 110, 
    height: 110, 
    borderRadius: 400/ 2,
  },

  sobre:{
    flexWrap: "wrap",
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 1,
    marginHorizontal: 5,
  },

  apPropriedade: {
    flexWrap: "wrap",
    flexDirection: 'column',
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold'
  },

  apValor: {
    flexWrap: "wrap",
    flexDirection: 'column',
    fontSize: 16,
    marginHorizontal: 80,
    marginBottom: 2,
    color: '#fff',

  },
})