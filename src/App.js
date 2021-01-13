import React from 'react';

const App = () => {
  // 'ativo' iniciará como true
  // setAtivo altera seu valor
  // setNome é o padrão utilizado 
  const [ativo, setAtivo] = React.useState(true);

  return (
    // ao clicar, o valor será atualizado para o seu contrário (!ativo)
    // isso dará um efeito de ativar e desativar
    <button onClick={() => setAtivo(!ativo)}>
      {ativo ? 'Botão Ativo' : 'Botão Inativo'}
    </button>
  );
};

export default App;
