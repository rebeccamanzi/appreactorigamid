import React from 'react';

const App = () => {
  return (
    //<React.Fragment>
    <>
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
