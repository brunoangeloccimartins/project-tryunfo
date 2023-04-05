import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label>
          Nome da carta:
          <input
            type="text"
            name="name"
            data-testid="name-input"
          />
        </label>
        <label>
          Descrição da Carta:
          <textarea
            type="text"
            name="description"
            data-testid="description-input"
          />
        </label>
        <label>
          Atributo:
          <input type="number" data-testid="attr1-input" />
        </label>
        <label>
          Atributo:
          <input type="number" data-testid="attr2-input" />
        </label>
        <label>
          Atributo:
          <input type="number" data-testid="attr3-input" />
        </label>
        <input type="text" data-testid="image-input" />
        <label>
          Raridade da Carta:
          <select data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label>
          É SUPER TRUNFO?
          <input type="checkbox" data-testid="trunfo-input" />
        </label>
        <button data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
