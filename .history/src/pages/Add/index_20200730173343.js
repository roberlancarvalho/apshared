import React from 'react'
import { View, Text, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

import styles from './styles'

export default function Add() {
  return (
    <View style={styles.container}>
      <Text>
        Adicionar nova vaga
      </Text>
    </View>
  )
}