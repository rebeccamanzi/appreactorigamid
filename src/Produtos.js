import React from 'react';
import Produto from './Produto';
import Titulo from './Titulo';

const Produtos = () => {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];

  return (
    <section>
      <Titulo texto="Produtos"></Titulo>
      {produtos.map((produto) => (
        // renderiza o componente Produto passando todas as suas propriedades
        <Produto key={produto.nome} {...produto} />
      ))}
    </section>
  );
};

export default Produtos;
