import React from 'react';

const Input = ({ id, label, type, placeholder }) => {
  return (
    <div>
      <label htmlFor={id} className='block text-sm font-medium text-gray-700'>
        {label}
      </label>
      <input
        type={type} id={id} name={id} placeholder={placeholder}
        className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
      />
    </div>
  );
}

export default Input;
