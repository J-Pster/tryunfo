import React from 'react';
import CriarBaralho from './CriarBaralho';
import MeuBaralho from './MeuBaralho';
import './styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      baralho: [],
      hasTrunfo: false,
    };

    this.criarBaralho = this.criarBaralho.bind(this);
    this.onDeleteButton = this.onDeleteButton.bind(this);
  }

  onDeleteButton(element) {
    const props = element.target.id.split('|');
    const [name, trunfo] = props;
    const { baralho } = this.state;
    const newBaralho = baralho.filter((card) => card.cardName !== name);
    this.setState(
      {
        baralho: newBaralho,
        hasTrunfo: trunfo !== 'true',
      },
    );
  }

  criarBaralho(baralho, hasTrunfo) {
    this.setState({ baralho });
    this.setState({ hasTrunfo });
  }

  render() {
    const { baralho, hasTrunfo } = this.state;
    return (
      <>
        <main className="homeMain">
          <img className="homeImage" src="/images/Logo-Tryunfo.png" alt="Logo Tryunfo" />
          <h1>Versão Desenvolvida por João Pster.</h1>
        </main>
        <CriarBaralho
          baralho={ baralho }
          criarBaralho={ this.criarBaralho }
          hasTrunfo={ hasTrunfo }
        />
        <MeuBaralho baralho={ baralho } onDeleteButton={ this.onDeleteButton } />
      </>
    );
  }
}

export default App;

// Por João Pster - T20TB
