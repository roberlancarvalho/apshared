import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272e39',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight + 4,
  },

  imgBackground: {
    width: '100%',
    height: '30%',
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
    marginTop: 50,
  },
})