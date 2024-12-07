import React from 'react';
import backgroundImage from './../assets/background-login.jpg';
import FormArea from '../components/FormContainer.tsx';

const Login = () => {
  const handleLogin = (e: any) => {
    e.preventDefault();
    console.log('Login');
  }

  return (
    <FormArea backgroundImage={backgroundImage} headerHeight={0} onBubmit={handleLogin} >
      <h1 className='text-sesi text-2xl text-center font-medium'>Welcome!</h1>
    </FormArea>
  );
}

export default Login;
