'use client'

import React from 'react';

import LoginForm, { LoginUserSchema } from './login-form';


const Login = () => {
  const handleLoginUser = (data: LoginUserSchema) => {
    console.log(data.password);
    console.log(data.user);
  }

  return (
    <LoginForm handleLoginUser={handleLoginUser}  />
  );
}

export default Login;
