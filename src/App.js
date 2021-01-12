import React from 'react';

const App = () => {
  // Declare uma nova variável de state, a qual chamaremos de "count"
  // useState é um dos Hooks do React
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Comprar</button>
      <p>Total: {count}</p>
      <p>Preço: R$ {count * 250}</p>
    </div>
  );
};

export default App;
