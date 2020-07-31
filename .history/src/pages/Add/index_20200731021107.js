import React, { useRef } from 'react'
import { View, Text, Picker, Image, ImageBackground, TouchableOpacity, Button } from 'react-native'
import Input from '../components/Input';
import { Form } from '@unform/mobile';

import styles from './styles'

export default function Add() {
  const [selectedValue, setSelectedValue] = useState("Selecionar bairro")

  const formRef = useRef(null);
  function handleSubmit(data) {
    console.log(data);
    // { email: 'test@example.com', password: '123456' }
  }

  return (
    <>
      <View style={styles.container}>

        <ImageBackground style={styles.imgBackground}
          resizeMode='cover'
          source={require('../../assets/ap.png')}>
        </ImageBackground>

        <Image source={require('../../assets/logo.png')} style={styles.logo} />

        <View style={styles.conteudo}>
          <Text style={styles.title}>Cadastre seu AP</Text>
          <Text style={styles.description}>Adicione todos os detalhes importantes do AP ou casa</Text>

          <Form style={styles.form} ref={formRef} onSubmit={handleSubmit}>
            <Input placeholder="Endereço do AP ou casa" style={styles.input} name="endereço" type="text" />
            <Picker
              selectedValue={selectedValue}
              style={{ height: 50, width: 150 }}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
            <Input placeholder="Tamanho aproximado (m²)" style={styles.input} name="email" type="email" />
            <Input placeholder="Valor total do aluguel" style={styles.input} name="valor-total" type="text" />
            <Input placeholder="Valor dividido por morador" style={styles.input} name="valor-dividido" type="text" />
            {/* <Input placeholder="Quantidade de quartos" style={styles.input} name="quartos" type="upload" />
            <Input placeholder="Quantidade de banheiros" style={styles.input} name="banheiros" type="upload" /> */}
            <Input placeholder="Selecionar foto do interior do imóvel" style={styles.input} name="foto" type="upload" />
            {/* <Input placeholder="Possui varanda" style={styles.input} name="varanda" type="upload" /> */}

            <TouchableOpacity
              style={styles.botao}
              onPress={() => formRef.current.submitForm()}
            >
              <Text style={styles.botaoText}>ENVIAR</Text>
            </TouchableOpacity>

            {/* <View style={styles.botao}>
              <Button title="Enviar" onPress={() => formRef.current.submitForm()} />
            </View> */}

          </Form>
        </View>
      </View>

    </>
  )
}