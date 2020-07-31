import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

import styles from './styles'

export default function Buscar() {
  return (
    <View style={styles.container}>
      <View style={styles.formBuscar}>
        <TextInput
          style={styles.inputBuscar}
          placeholder="Buscar vaga"
          placeholderTextColor="#999"
          autoCapitalize="sentences"
          autoCorrect={false}
        />

        <TouchableOpacity onPress={() => { }} style={styles.botaoBuscar} >
          <FontAwesome name="search" size={24} color="#62b0d3" />
        </TouchableOpacity>
      </View>
    </View>
  )
}