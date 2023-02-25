import { Component } from 'react';

export class FormContact extends Component {
  state = {
    name: '',
    num: '',
  };

  hundelChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  hundSubmit = e => {
    e.preventDefault();

    this.props.addNamesContact(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', num: '' });
  };

  render() {
    return (
      <form onSubmit={this.hundSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.hundelChange}
            value={this.state.name}
            required
            id="nameInputId"
          />
        </label>
        <button type="submit">add new contact</button>
      </form>
    );
  }
}
