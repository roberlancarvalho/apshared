import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#272e39'
  },

  logo: {
    width: 170,
    height: 70,
    marginBottom: 40
  },

  title: {
    fontSize: 20,
    marginBottom: 2,
    marginTop: 12,
    color: '#fff',
    fontWeight: 'bold'
  },

  input: {
    marginBottom: 5,
    marginTop: 10,
    padding: 10,
    width: 320,
    height: 42,
    backgroundColor: '#fff',
    fontSize: 16,
    borderRadius: 3
  },

  botao: {
    width: 320,
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
  }
})