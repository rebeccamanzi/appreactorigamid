import React from 'react';
import Footer from './Footer';
import { Form } from './Form/Form';
import Header from './Header';

const Teste = () => {
  const active = false;
  if (active) {
    return <p>Ativo</p>;
  } else {
    return null; // sempre precisa retornar algo, nem q seja null
  }
};

const App = () => {
  return (
    <>
      <Header />
      <Teste />
      <Form />
      <Footer />
    </>
  );
};

export default App;
// React.Fragment ou <> </>
// atributos com nomes compostos devem ser utilizados como camelCase. ex: <video autoPlay>
// para colocar js no jsx, usar {} (variaveis, expressoes, etc)
// eventos React: https://reactjs.org/docs/events.html
