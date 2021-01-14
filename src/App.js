import React, { useState } from 'react';
import Produto from './Produto';

const App = () => {
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(null);

  async function handleClick(event) {
    setLoading(true);
    // busca dos dados na API
    // ${event.target.innerText} -> para saber o nome do produto
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    );
    const json = await response.json();
    setDados(json);
    setLoading(false);
  }

  return (
    <div>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>
        notebook
      </button>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>
        smartphone
      </button>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>
        tablet
      </button>
      {loading && <p>Loading...</p>}
      {!loading && dados && <Produto dados={dados} />}
    </div>
  );
};

export default App;

//  {dados && <Produto dados={dados} />}:
// mostrará o produto apenas se os dados já tiverem carregados
