import React from 'react';
import { Button } from './Button';
import { Input } from './Input';

export const Form = () => {
  return (
    <form>
      <label htmlFor="nome">Nome</label>
      <Input />
      <label htmlFor="email">Email</label>
      <Input />
      <Button />
    </form>
  );
};
