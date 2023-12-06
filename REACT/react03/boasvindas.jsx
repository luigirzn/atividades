import React from 'react';
import PropTypes from 'prop-types';

const BoasVindas = (props) => {
  const { nome } = props;

  return (
    <section style={{ textAlign: 'center', padding: '20px', border: '1px solid #ccc' }}>
      <h1 style={{ color: 'blue' }}>Bem-vindo, {nome}!</h1>
      <p style={{ fontSize: '18px' }}>Esperamos que você aproveite sua visita.</p>
    </section>
  );
};

BoasVindas.defaultProps = {
  nome: 'Visitante',
};

BoasVindas.propTypes = {
  nome: PropTypes.string,
};

export default BoasVindas;
