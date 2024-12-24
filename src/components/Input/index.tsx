'use client'

import React from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';

interface IInputProps {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<any>;
  errors: FieldError | undefined;
}

const Input: React.FC<IInputProps> = ({
  name = 'input',
  label = 'Input:',
  type = 'text',
  placeholder = 'Enter your input...',
  register,
  errors,
}) => {
  return (
    <div className='flex flex-col gap-1 my-4'>
      <label htmlFor={name} className='text-sm font-medium text-gray-700'>
        {label}
      </label>
      <input
        type={type} id={name} placeholder={placeholder}
        {...register(name)}
        className='mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
      />
      {errors &&
        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
      }
    </div>
  );
}

export default Input;
