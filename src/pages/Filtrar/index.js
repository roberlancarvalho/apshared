import React, { useRef, useState } from 'react'

import { View, Text, Image, FlatList, ImageBackground, TextInput, TouchableOpacity, Picker } from 'react-native'
import { FontAwesome, AntDesign, Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

import logoImg from '../../assets/logo.png'

export default function Filtrar() {

  const [selectedLocalidade, setSelectedLocalidade] = useState("Selecionar localidade")
  const [selectedCurso, setSelectedCurso] = useState("Selecionar curso")
  const [selectedVagas, setSelectedVagas] = useState("Selecionar vagas")

  const navigation = useNavigation()

  function navigateToBuscar() {
    navigation.navigate('Buscar')
  }

  return (
    <View style={styles.container} >

      <Image source={require('../../assets/logo.png')} style={styles.logo} />

      <View style={styles.title}>
        <Feather name="filter" size={24} />
        <Text>Filtrar por localidade, curso e vagas</Text>
      </View>

      <View style={styles.inputs}>
        <Text>Localidade</Text>
        <Picker
          selectedValue={selectedLocalidade}
          style={styles.selecaoLocalidade}
          onValueChange={(itemValue, itemIndex) => setSelectedLocalidade(itemValue)}
        >
          <Picker.Item label="Localidade" value="selecionar" status='disable' />
          <Picker.Item label="Centro" value="centro" />
          <Picker.Item label="Rodoviária" value="rodoviaria" />
          <Picker.Item label="Planalto Universitário" value="planalto" />
          <Picker.Item label="Campo Novo" value="campo-novo" />

        </Picker>

        <View style={styles.alinhados}>
          <Text>Localidade</Text>
          <Picker
            selectedValue={selectedCurso}
            style={styles.selecaoCurso}
            onValueChange={(itemValue, itemIndex) => setSelectedCurso(itemValue)}
          >

            <Picker.Item label="Curso" value="selecionar" />
            <Picker.Item label="Sistemas de Informação" value="si" />
            <Picker.Item label="Adminiatração" value="adm" />
            <Picker.Item label="Ciências Contábeis" value="contabilidade" />
            <Picker.Item label="Enfermagem" value="enfermagem" />

          </Picker>
          
          <Text>Localidade</Text>
          <Picker
            selectedValue={selectedVagas}
            style={styles.selecaoVagas}
            onValueChange={(itemValue, itemIndex) => setSelectedVagas(itemValue)}
          >

            <Picker.Item label="Vagas" value="selecionar" />
            <Picker.Item label="1 vaga" value="1" />
            <Picker.Item label="2 vagas" value="2" />
            <Picker.Item label="3 vagas" value="4" />
            <Picker.Item label="Mais vagas" value="mais" />

          </Picker>
        </View>
      </View>

      <TouchableOpacity
        style={styles.botao}
        onPress={navigateToBuscar}
      >
        <Text style={styles.botaoText}>BUSCAR</Text>
      </TouchableOpacity>

    </View>
  )
}