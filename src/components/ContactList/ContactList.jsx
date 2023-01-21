import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';

import styles from './ContactList.module.scss';

// Приймає всі контакти та Приймає всі контакти та прокидує далі метод для видалення
const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <li className={styles.item} key={contact.id}>
          <ContactItem
            contact={contact}
            onDeleteContact={() => {
              onDeleteContact(contact.id); // Метод на клікі, приймає ID контакту
            }}
          />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
