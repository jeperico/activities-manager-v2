import React from 'react';

interface IInputProps {
  name: string;
  label: string;
  type: string;
  placeholder: string;
}

const Input: React.FC<IInputProps> = ({
  name = 'input',
  label = 'Input:',
  type = 'text',
  placeholder = 'Enter your input...',
}) => {
  return (
    <div>
      <label htmlFor={name} className='block text-sm font-medium text-gray-700'>
        {label}
      </label>
      <input
        type={type} id={name} name={name} placeholder={placeholder}
        className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
      />
    </div>
  );
}

export default Input;
