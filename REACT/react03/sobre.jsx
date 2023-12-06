import React from 'react';

const estilo = {
  article: {
    textAlign: 'center',
    padding: '20px',
    border: '1px solid #ccc',
  },
  h2: {
    color: 'green',
  },
  p: {
    fontSize: '16px',
  },
};

const Sobre = () => {
  return (
    <article style={estilo.article}>
      <h2 style={estilo.h2}>Sobre o React</h2>
      <p style={estilo.p}>O React é uma biblioteca JavaScript para a construção de interfaces de usuário.</p>
    </article>
  );
};

export default Sobre;
