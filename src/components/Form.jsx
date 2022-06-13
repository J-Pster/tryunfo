import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Form.css';

class FormCriacao extends React.Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form className="form-criacao">
        <div className="form-campos-descritivos subcontainer-flex-column">
          <label htmlFor="name" className="subitemcontainer-flex">
            Nome
            <input
              className="normal-inputbox"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
              type="text"
              name="cardName"
            />
          </label>
          <label htmlFor="description" className="subitemcontainer-flex">
            Descrição
            <input
              className="normal-inputbox"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
              type="textarea"
              name="cardDescription"
            />
          </label>
        </div>
        <div className="form-campos-atributos subcontainer-flex-column">
          <label htmlFor="atributo-01" className="subitemcontainer-attr">
            Atributo 01
            <input
              className="input-box"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
              type="number"
              name="cardAttr1"
            />
          </label>
          <label htmlFor="atributo-02" className="subitemcontainer-attr">
            Atributo 02
            <input
              className="input-box"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
              type="number"
              name="cardAttr2"
            />
          </label>
          <label htmlFor="atributo-03" className="subitemcontainer-attr">
            Atributo 03
            <input
              className="input-box"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
              type="number"
              name="cardAttr3"
            />
          </label>
          <div className="pontosrestantes">
            Pontos Restantes = 000
          </div>
        </div>
        <div className="form-campos-especiais subcontainer-flex-column">
          <label htmlFor="imagem-input" className="subitemcontainer-flex">
            Imagem
            <input
              data-testid="image-input"
              className="normal-inputbox"
              value={ cardImage }
              onChange={ onInputChange }
              type="text"
              name="cardImage"
            />
          </label>
          <label htmlFor="raridade-selector" className="subitemcontainer-flex">
            Raridade
            <select
              className="normal-inputbox"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
              name="cardRare"
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          {
            hasTrunfo
              ? (
                <span className="superTrunfo">
                  Você já tem um Super Trunfo em seu baralho
                </span>
              )
              : (
                <label htmlFor="super-trunfo" className="trybe-trunfo">
                  <input
                    data-testid="trunfo-input"
                    checked={ cardTrunfo }
                    onChange={ onInputChange }
                    type="checkbox"
                    id="super-trunfo"
                    name="cardTrunfo"
                  />
                  Super Trybe Trunfo
                </label>
              )
          }
        </div>

        <button
          data-testid="save-button"
          className="button-save"
          type="button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

FormCriacao.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default FormCriacao;
