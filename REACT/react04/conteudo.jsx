import React from 'react';

class Conteudo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      read: false,
      like: 0,
      dislike: 0,
    };
  }

  handleRead = () => {
    this.setState({ read: true });
  };

  handleLike = () => {
    this.setState((prevState) => ({ like: prevState.like + 1 }));
  };

  handleDislike = () => {
    this.setState((prevState) => ({ dislike: prevState.dislike + 1 }));
  };

  render() {
    return (
      <article>
        <h2>Título do Artigo</h2>
        <p>Conteúdo do artigo vai aqui.</p>

        <div>
          <button onClick={this.handleRead}>Lido</button>
          <button onClick={this.handleLike}>Gostei</button>
          <button onClick={this.handleDislike}>Não Gostei</button>
        </div>

        <p>Estado: {this.state.read ? 'Lido' : 'Não Lido'}</p>
        <p>Gostei: {this.state.like}</p>
        <p>Não Gostei: {this.state.dislike}</p>
      </article>
    );
  }
}

export default Conteudo;
