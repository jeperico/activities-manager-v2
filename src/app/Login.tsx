import React from 'react';
import backgroundImage from './../assets/background-login.jpg';
import FormArea from '../components/FormContainer.tsx';
import Input from '../components/Input.tsx';
import Button from '../components/Button.tsx';

const Login = () => {
  const handleLogin = (e: any) => {
    e.preventDefault();
    console.log('Login');
  }

  return (
    <FormArea backgroundImage={backgroundImage} headerHeight={0} onBubmit={handleLogin} >
      <h1 className='text-sesi text-2xl text-center font-medium'>Welcome!</h1>
      <Input id='user' label='User:' type='text' placeholder='Enter your user...' />
      <Input id='password' label='Password:' type='password' placeholder='Enter your password...' />
      <Button onClick={undefined}>Login</Button>
    </FormArea>
  );
}

export default Login;
