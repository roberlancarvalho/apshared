import React, { useRef } from 'react';
import { Button } from 'react-native';
import { Form } from '@unform/mobile';
import Input from './components/Input';

export default function SignIn() {
  const formRef = useRef(null);

  function handleSubmit(data) {
    console.log(data);
    // { email: 'test@example.com', password: '123456' }
  }

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Input name="email" type="email" />
      <Input name="password" type="password" />

      <Button title="Sign in" onPress={() => formRef.current.submitForm()} />
    </Form>
  );
}