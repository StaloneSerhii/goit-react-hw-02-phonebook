import React, { Component } from 'react';
import { FormContact } from './formcontact/FormContact';
import { Contact } from './contacts/Contacsts';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addNamesContact = e => {
    const { name } = e;
    this.setState({ name: name });
  };

  render() {
    return (
      <div>
        <FormContact addNamesContact={this.addNamesContact} />
        <Contact dataContact={this.state.name} />
      </div>
    );
  }
}
