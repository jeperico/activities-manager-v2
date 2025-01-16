'use client'

import React from 'react';

import AddClassForm, { AddClassSchema } from './add-class-form';


const AddClass = () => {
  const handleClassName = (data: AddClassSchema) => {
    console.log(data.class);
  }

  return (
    <AddClassForm handleClassName={handleClassName}  />
  );
}

export default AddClass;
