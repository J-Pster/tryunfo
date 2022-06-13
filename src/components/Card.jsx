import React from 'react';
import '../styles/Card.css';
import PropTypes from 'prop-types';

const bgColors = {
  normal: '#036b52',
  raro: 'firebrick',
  'muito raro': 'mediumslateblue',
};

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      deleteButton,
      onDeleteButton,
    } = this.props;

    return (
      <div className="buttonBox">
        <div
          className="tryunfo-card"
          style={ {
            backgroundColor: bgColors[cardRare],
          } }
        >
          <p data-testid="name-card">{ cardName || 'Nome da Carta' }</p>
          <img src={ cardImage || 'https://voxnews.com.br/wp-content/uploads/2017/04/unnamed.png' } alt={ cardName } data-testid="image-card" />
          <p data-testid="description-card">
            { cardDescription
            || 'Coloque aqui uma breve descrição ou historia da sua carta.'}
          </p>
          <div className="attr-container">
            <div className="attr-paragraph">
              <p>Attr01................................</p>
              <p data-testid="attr1-card">{ Number(cardAttr1) }</p>
            </div>
            <div className="attr-paragraph">
              <p>Attr02................................</p>
              <p data-testid="attr2-card">{ Number(cardAttr2) }</p>
            </div>
            <div className="attr-paragraph">
              <p>Attr03................................</p>
              <p data-testid="attr3-card">{ Number(cardAttr3) }</p>
            </div>
          </div>
          <p data-testid="rare-card">{ cardRare }</p>
          { cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p> }
        </div>
        { deleteButton
                && (
                  <button
                    data-testid="delete-button"
                    type="button"
                    className="button-delete"
                    id={ `${cardName}|${cardTrunfo}` }
                    onClick={ onDeleteButton }
                  >
                    Deletar
                  </button>) }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  deleteButton: PropTypes.bool.isRequired,
  onDeleteButton: PropTypes.func,
};

Card.defaultProps = {
  onDeleteButton: null,
};

export default Card;
