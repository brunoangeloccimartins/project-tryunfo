import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <label>
          Nome da carta:
          <input
            type="text"
            name="name"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label>
          Descrição da Carta:
          <textarea
            type="text"
            name="description"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label>
          Atributo:
          <input
            type="number"
            data-testid="attr1-input"
            name="attr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label>
          Atributo:
          <input
            type="number"
            data-testid="attr2-input"
            name="attr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label>
          Atributo:
          <input
            type="number"
            data-testid="attr3-input"
            name="attr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <input
          type="text"
          data-testid="image-input"
          name="image"
          value={ cardImage }
          onChange={ onInputChange }
        />
        <label>
          Raridade da Carta:
          <select
            data-testid="rare-input"
            name="rare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        {hasTrunfo ? (
          <p>Você já tem um Super Trunfo em seu baralho</p>
        ) : (
          <label>

            <p>Super Trunfo</p>
            <input
              type="checkbox"
              data-testid="trunfo-input"
              name="trunfo"
              id="trunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>

        )}
        <button
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
