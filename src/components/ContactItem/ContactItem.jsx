import IconButton from '../IconButton';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';

import styles from './ContactItem.module.scss';

// Приймає контакт та метод видалення контакту
const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <>
      <span className={styles.name}>{contact.name}: </span>
      <a href={`tel:${contact.number}`} className={styles.number}>
        {contact.number}
      </a>
      <IconButton onClick={onDeleteContact} aria-label="Delete contact">
        <DeleteIcon width="20px" height="20px" fill="#a7a1a1" />
      </IconButton>
    </>
  );
};

export default ContactItem;
