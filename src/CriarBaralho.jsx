import React from 'react';
import PropTypes from 'prop-types';

// Importando os components
import FormCriacao from './components/Form';
import Card from './components/Card';

// Importando os validadores do formulario de criação das cartas
import {
  ValidateEmptyFields,
  ValidateAttrSizes,
  ValidadeMaxAttrValue,
} from './components/FormValidator';

// Importanto os estilos CSS
import './styles/CriarBaralho.css';

class CriarBaralho extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSaveButtonClick = this.handleSaveButtonClick.bind(this);
    this.handleSaveButtonDisabled = this.handleSaveButtonDisabled.bind(this);
  }

  handleInputChange({ target }) {
    const { name } = target;
    let { value } = target;
    if (target.type === 'checkbox') value = target.checked;
    if (target.type === 'number') value = parseInt(target.value, 10);

    this.setState({
      [name]: value,
    }, () => this.handleSaveButtonDisabled());
  }

  handleSaveButtonDisabled() {
    const response = {
      emptyFields: ValidateEmptyFields(this.state),
      correctAttrSizes: ValidateAttrSizes(this.state),
      maxAttrValue: ValidadeMaxAttrValue(this.state),
    };
    if (response.emptyFields && response.correctAttrSizes && response.maxAttrValue) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  handleSaveButtonClick() {
    const { baralho, criarBaralho } = this.props;
    const { cardTrunfo } = this.state;
    baralho.push(this.state);
    criarBaralho(baralho, cardTrunfo);
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
  }

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
      isSaveButtonDisabled,
    } = this.state;

    const { hasTrunfo } = this.props;

    return (
      <div className="paiCriarBaralho">
        <div className="ladoEsquerdo">
          <h1 className="titulo">Adicionar nova carta</h1>
          <FormCriacao
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.handleInputChange }
            onSaveButtonClick={ this.handleSaveButtonClick }
            handleSaveButtonDisabled={ this.handleSaveButtonDisabled }
          />
        </div>
        <div className="ladoDireito">
          <h1 className="titulo">Pré-visualização</h1>
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            deleteButton={ false }
          />
        </div>
      </div>
    );
  }
}

CriarBaralho.propTypes = {
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
  criarBaralho: PropTypes.func.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
};

export default CriarBaralho;
