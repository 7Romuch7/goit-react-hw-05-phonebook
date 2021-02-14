import { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import Title from './components/Title';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import shortid from 'shortid';
import styles from './components/ContactList/ContactList.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }

  formHandleSubmit = data => {
    this.contactUserId = shortid.generate();
    const contact = {
      id: this.contactUserId,
      name: data.name,
      number: data.number,
    };

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  filteredName = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  changeFilter = filter => {
    this.setState({ filter });
  };

  removedContact = contactUserId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactUserId),
      };
    });
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({contacts: parsedContacts})
    }

  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts) )
    }
  }

  render() {
    const { filter, contacts } = this.state;
    const fiter = this.filteredName();

    return (
      <div className="container" >
        <Title title='Phonebook'/>
        <ContactForm onSubmit={this.formHandleSubmit}
          contacts={this.state.contacts} />
        <CSSTransition in={contacts.length > 1} classNames={styles} timeout={250} unmountOnExit>
          <Filter value={filter} onChangeFilter={this.changeFilter} />
        </CSSTransition>
        <CSSTransition in={fiter.length > 0} classNames={styles} timeout={250} unmountOnExit>
            <ContactList
              contacts={this.filteredName()}
              onRemoveContact={this.removedContact} />
        </CSSTransition>

     </div>
    )
  }
}

export default App;
