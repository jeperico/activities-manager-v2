import React from 'react';
import {v4 as uuid} from 'uuid';
// @ts-ignore
import backgroundImage from './../assets/background-login.jpg';
import FormArea from '../components/FormContainer.tsx';
import Input from '../components/Input.tsx';
import Button from '../components/Button.tsx';

const Login = () => {
  const handleLogin = (e: any) => {
    e.preventDefault();
    console.log(`(${uuid()}) - [LOGIN]: Submit successful!`);
  }

  return (
    <FormArea backgroundImage={backgroundImage} headerHeight={0} onSubmit={handleLogin} >
      <h1 className='text-sesi text-2xl text-center font-medium'>Welcome!</h1>
      <Input name='user' label='User:' type='text' placeholder='Enter your user...' />
      <Input name='password' label='Password:' type='password' placeholder='Enter your password...' />
      <Button onClick={handleLogin}>Login</Button>
    </FormArea>
  );
}

export default Login;
