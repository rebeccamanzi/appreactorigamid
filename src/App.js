import React from 'react';
import Home from './Home';
import Header from './Header';
import Produtos from './Produtos';

const App = () => {
  const { pathname } = window.location;
  const Pagina = pathname === '/produtos' ? Produtos : Home;

  return (
    <div>
      <Header />
      <Pagina />
    </div>
  );
};

export default App;
