import React from 'react';

const App = () => {
  
  function mostrarNome(sobrenome) {
    return 'Rebecca ' + sobrenome;
  }

  const carro = {
    ano: 2020,
    marca: 'Chevrolet'
  }

    return (
    //<React.Fragment>
    <>
    <p>Olá {mostrarNome('Manzi')}</p>
    <p>Hoje é dia {new Date().getDate()}</p>

    <p>Seu carro é do ano {carro.ano} e da marca {carro.marca}</p>

    <a className="ativo" href="https://origamid.com" title="Site Origamid">
      Origamid
    </a>
    <label htmlFor="nome">Nome</label>
    <input type="text" id="nome"/>
    </>
    //</React.Fragment>  
  );
};

export default App;
// React.Fragment ou <> </>
// atributos com nomes compostos devem ser utilizados como camelCase. ex: <video autoPlay>
// para colocar js no jsx, usar {} (variaveis, expressoes, etc)
