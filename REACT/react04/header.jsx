import React from 'react';

class Header extends React.Component {
  render() {
    const estilo = {
      backgroundColor: 'lightblue',
      padding: '10px',
      textAlign: 'center',
    };

    return (
      <section style={estilo}>
        <h1>Meu Site</h1>
        <p>Bem-vindo ao meu site!</p>
      </section>
    );
  }
}

export default Header;