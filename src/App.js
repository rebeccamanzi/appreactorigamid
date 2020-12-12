import React from 'react';

// Podemos atribuir eventos diretamente aos elementos JSX como um atributo. Os eventos são sintáticos, ou seja, são criados pelo próprio React porém seguindo as especificações da W3C (e funcionam igualmente nos diversos browsers que o React suporta).

const App = () => {
  function handleClick(event) {
    alert('Comprou: ' + event.target.innerText);
  }

  return (
    <div>
      <button onClick={handleClick}>Camisa</button>
      <button onClick={handleClick}>Bermuda</button>
    </div>
  );
};

export default App;
// React.Fragment ou <> </>
// atributos com nomes compostos devem ser utilizados como camelCase. ex: <video autoPlay>
// para colocar js no jsx, usar {} (variaveis, expressoes, etc)
// eventos React: https://reactjs.org/docs/events.html
