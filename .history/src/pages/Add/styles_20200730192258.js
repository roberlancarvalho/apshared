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
    height: '35%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 170,
    height: 70,
    position: 'absolute',
    zIndex: 5,
    flexDirection: 'row',
    marginTop: 55,
  },

  conteudo: {
    marginTop: -90,
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

  description: {
    fontSize: 13,
    lineHeight: 15,
    color: '#ABABAB',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
})