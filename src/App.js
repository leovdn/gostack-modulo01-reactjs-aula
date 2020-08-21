import React from 'react';
import Header from './components/Header';

function App() {
  return (
  <>
    <Header title="Homepage">
      <ul>
        <li>Sobre</li>
        <li>Contato</li>
        <li>Links</li>
        <li>Github</li>
      </ul>
    </Header>
    <Header title="Projects">
      <ul>
        <li>Galeria</li>
        <li>Formulário</li>
      </ul>
    </Header>
  </>
  )
}

export default App;