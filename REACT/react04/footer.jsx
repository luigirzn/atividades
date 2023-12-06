import React from 'react';

class Footer extends React.Component {
  render() {
    const estilo = {
      fontSize: '0.8em',
    };

    return (
      <footer style={estilo}>
        <p>Outras informações do rodapé.</p>
        <p>© 2023 Meu Site. Todos os direitos reservados.</p>
      </footer>
    );
  }
}

export default Footer;
