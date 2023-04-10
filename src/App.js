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

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.disabled);
  };

  render() {
    const { name, description, attr1, attr2, attr3, image, rare, trunfo,
      disabled } = this.state;
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
      </div>
    );
  }
}

export default App;
