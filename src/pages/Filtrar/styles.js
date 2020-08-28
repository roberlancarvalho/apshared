import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272e39',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight + 16,
  },

  title: {
    color: '#62b0d3',
    marginTop: 30,
  },

  inputs: {
    alignItems: 'center',
    marginTop: 50,
  },

  selecaoLocalidade: {
    height: 42,
    width: 340,
    color: 'black',
    backgroundColor: '#fff',
    padding: 5,
    marginTop: 5,
  },

  alinhados: {
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  selecaoCurso: {
    height: 42,
    width: 185,
    color: 'black',
    backgroundColor: '#fff',
    marginTop: 5,
    marginHorizontal: 5,
  },

  selecaoVagas: {
    height: 42,
    width: 145,
    color: 'black',
    backgroundColor: '#fff',
    marginTop: 5,
    marginHorizontal: 5,
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

})