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
    borderRadius: 3
  }
})