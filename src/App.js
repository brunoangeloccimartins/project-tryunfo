import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    name: '',
    description: '',
    attr1: '0',
    attr2: '0',
    attr3: '0',
    image: '',
    rare: 'normal',
    trunfo: false,
    disabled: true,
    cards: [],
    hasTrunfo: false,
  };

  disabled = () => {
    const { name, description, attr1, attr2, attr3, image } = this.state;
    const noventa = 90;
    const duzentosEDez = 210;
    const maxAttr = Number(attr1) >= 0 && Number(attr2) >= 0 && Number(attr3) >= 0
      && Number(attr1) <= noventa && Number(attr2) <= noventa
      && Number(attr3) <= noventa && Number(attr1)
      + Number(attr2) + Number(attr3) <= duzentosEDez;

    const validation = name.length > 0
      && description.length > 0
      && image.length > 0;

    this.setState({ disabled: !(maxAttr && validation) });
  };

  hasTrunfo = () => {
    const { cards } = this.state;
    const check = cards.some((element) => element.trunfo);
    this.setState({
      hasTrunfo: check,
    });
  };

  savedCards = () => {
    const { name, attr1, attr2, attr3, description, image, rare, trunfo } = this.state;

    const saved = {
      name, attr1, attr2, attr3, description, image, rare, trunfo,
    };

    this.setState((prevState) => ({
      cards: [...prevState.cards, saved],
      name: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      description: '',
      image: '',
      rare: '',
      trunfo: false,
      disabled: true,
    }), this.hasTrunfo);
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.disabled);
  };

  render() {
    const { name, description, attr1, attr2, attr3, image, rare, trunfo,
      disabled, hasTrunfo, cards } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          onInputChange={ this.handleChange }
          isSaveButtonDisabled={ disabled }
          onSaveButtonClick={ this.savedCards }
          hasTrunfo={ hasTrunfo }
        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          onInputChange={ this.handleChange }
        />
        {cards.map((element, index) => (
          <Card
            key={ index }
            cardName={ element.name }
            cardDescription={ element.description }
            cardAttr1={ element.attr1 }
            cardAttr2={ element.attr2 }
            cardAttr3={ element.attr3 }
            cardImage={ element.image }
            cardRare={ element.rare }
            cardTrunfo={ element.trunfo }
          />
        ))}
      </div>
    );
  }
}

export default App;
