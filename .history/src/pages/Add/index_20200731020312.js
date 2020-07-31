import React, { useRef } from 'react'
import { View, Text, Image, ImageBackground, TouchableOpacity, Button } from 'react-native'
import Input from '../components/Input';
import { Form } from '@unform/mobile';

import styles from './styles'

export default function Add() {
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
            <Input placeholder="Bairro" style={styles.input} name="email" type="email" />
            <Input placeholder="Tamanho aproximado (m²)" style={styles.input} name="email" type="email" />
            <Input placeholder="Valor total do aluguel" style={styles.input} name="valor-total" type="text" />
            <Input placeholder="Valor dividido por morador" style={styles.input} name="valor-dividido" type="text" />
            <Input placeholder="Foto do interior do imóvel" style={styles.input} name="foto" type="upload" />

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