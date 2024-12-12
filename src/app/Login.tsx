import React from 'react';
import './../global.css';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// @ts-ignore
import backgroundImage from './../assets/background-login.jpg';
import FormArea from './../components/FormContainer.tsx';
import Input from './../components/Input.tsx';
import Button from './../components/Button.tsx';

const loginUserSchema = z.object({
  user: z.string().min(1, 'User is required'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
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
    <FormArea backgroundImage={backgroundImage} headerHeight={0} onSubmit={handleSubmit(handleLoginUser)} >
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
      <Button>Login</Button>
    </FormArea>
  );
}

export default Login;
