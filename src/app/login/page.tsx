'use client'

import React from 'react';
import { useForm } from 'react-hook-form'
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import backgroundImage from '@/public/background-login.jpg';
import FormArea from '@/components/FormContainer';
import Input from '@/components/Input';
import Button from '@/components/Button';

const loginUserSchema = z.object({
  user: z.string({
    required_error: 'User is required',
    invalid_type_error: 'User must be a string',
  }),
  password: z.string({
    required_error: 'Password is required',
    invalid_type_error: 'Password must be a string',
  }).min(6, 'Password must be at least 6 characters long'),
});

type LoginUserSchema = z.infer<typeof loginUserSchema>;

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginUserSchema>({
    resolver: zodResolver(loginUserSchema),
  });

  const handleLoginUser = (data: LoginUserSchema) => {
    console.log(data.password);
    console.log(data.user);
  }

  return (
    <FormArea backgroundImage={backgroundImage.src} headerHeight={0} onSubmit={handleSubmit(handleLoginUser)} >
      <h1 className='text-sesi text-2xl text-center font-medium'>Welcome!</h1>
      <Input
        label='User:'
        type='text'
        placeholder='Enter your user...'
        name='user'
        register={register}
        errors={errors.user}
      />
      <Input
        label='Password:'
        type='password'
        placeholder='Enter your password...'
        name='password'
        register={register}
        errors={errors.password}
      />
      <Button theme='sesi'>Login</Button>
    </FormArea>
  );
}

export default Login;
