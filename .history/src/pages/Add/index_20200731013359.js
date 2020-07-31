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

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="email" type="email" />
            <Input name="password" type="password" />
            <Button title="Sign in" onPress={() => formRef.current.submitForm()} />
          </Form>
        </View>
      </View>

    </>
  )
}