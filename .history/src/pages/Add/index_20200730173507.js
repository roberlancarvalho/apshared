import React from 'react'
import { View, Text, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

import styles from './styles'

export default function Add() {
  return (
    <View style={styles.container}>
      <View>
        <ImageBackground style={styles.imgBackground}
          resizeMode='cover'
          source={require('../../assets/ap.png')}>
          <Image source={require('../../assets/logo.png')}
            style={styles.logo}
          />
        </ImageBackground>
      </View>
    </View>
  )
}