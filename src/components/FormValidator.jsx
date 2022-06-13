const ValidateEmptyFields = ({
  cardName,
  cardDescription,
  cardAttr1,
  cardAttr2,
  cardAttr3,
  cardImage,
  cardRare,
}) => {
  if (
    cardName !== ''
    && cardDescription !== ''
    && cardAttr1 !== ''
    && cardAttr2 !== ''
    && cardAttr3 !== ''
    && cardImage !== ''
    && cardRare !== ''
  ) {
    return true;
  }
  return false;
};

const ValidateAttrSizes = ({
  cardAttr1,
  cardAttr2,
  cardAttr3,
}) => {
  const maxNumber = 90;
  const minNumber = 0;
  if (
    cardAttr1 >= minNumber
    && cardAttr1 <= maxNumber
    && cardAttr2 >= minNumber
    && cardAttr2 <= maxNumber
    && cardAttr3 >= minNumber
    && cardAttr3 <= maxNumber
  ) {
    return true;
  }
  return false;
};

const ValidadeMaxAttrValue = ({
  cardAttr1,
  cardAttr2,
  cardAttr3,
}) => {
  const maxValue = 210;
  if (
    parseFloat(cardAttr1) + parseFloat(cardAttr2) + parseFloat(cardAttr3) <= maxValue
  ) {
    return true;
  }
  return false;
};

module.exports = { ValidateEmptyFields, ValidateAttrSizes, ValidadeMaxAttrValue };
