import React from 'react';

// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

const App = () => {
  return (
    <section>
      {produtos.map(
        (produto) =>
          Number(produto.preco.replace('R$ ', '')) > 1500 && (
            <>
              <h1>{produto.nome}</h1>
              <p>Preço: {produto.preco}</p>
              <ul>
                {produto.cores.map((cor) => (
                  <li style={{ backgroundColor: cor, color: 'white' }}>
                    {cor}
                  </li>
                ))}
              </ul>
            </>
          ),
      )}
    </section>
  );
};

export default App;
// React.Fragment ou <> </>
// atributos com nomes compostos devem ser utilizados como camelCase. ex: <video autoPlay>
// para colocar js no jsx, usar {} (variaveis, expressoes, etc)
