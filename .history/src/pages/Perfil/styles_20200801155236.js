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
    // flexDirection: 'column',
    // justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    marginHorizontal: 5,
  },

  propriedade: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold'
  },

  valor: {
    fontSize: 16,
    marginHorizontal: 80,
    marginBottom: 2,
    color: '#fff',

  },
})