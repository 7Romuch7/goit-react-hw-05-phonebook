import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactListItem from '../ContactListItem';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onRemoveContact }) => (
  <TransitionGroup component="ul" className={styles.listContacts}>
    {contacts.map(({ id, name, number }) => (
        <CSSTransition key={id} timeout={250} classNames={styles}>
          <ContactListItem
            id={id}  
            name={name}
            number={number}
            onRemove={() => onRemoveContact(id)}
            />
        </CSSTransition>
    ))}
  </TransitionGroup>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemoveContact: PropTypes.func,
};

export default ContactList;