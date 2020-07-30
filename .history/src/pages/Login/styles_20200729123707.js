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
    height: 40,
    backgroundColor: '#fff',
    fontSize: 16,
    // fontWeight: 'bold',
    borderRadius: 3
  }
})