import React from 'react';
import PropTypes from 'prop-types';
import './styles/MeuBaralho.css';
import Card from './components/Card';

class MeuBaralho extends React.Component {
  render() {
    const { baralho, onDeleteButton } = this.props;
    return (
      baralho.length ? (
        <div className="paiMeuBaralho">
          <h1>Todas as cartas do baralho</h1>
          <div className="cartasDoBaralho">
            {
              baralho.map((card) => (<Card
                key={ card.cardName }
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
                hasTrunfo={ card.hasTrunfo }
                deleteButton
                onDeleteButton={ onDeleteButton }
              />))
            }
          </div>
        </div>
      ) : null
    );
  }
}

MeuBaralho.propTypes = {
  baralho: PropTypes.arrayOf(PropTypes.shape({
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttr1: PropTypes.number.isRequired,
    cardAttr2: PropTypes.number.isRequired,
    cardAttr3: PropTypes.number.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
  })).isRequired,
  onDeleteButton: PropTypes.func.isRequired,
};

export default MeuBaralho;
