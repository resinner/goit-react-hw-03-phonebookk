import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './ContactForm.module.scss';

class ContactForm extends Component {
  // PropTypes як статична властивість
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  // Стейт форми
  state = {
    name: '',
    number: '',
  };

  // Метод, стежить за імпутами та записує в стейт їх значення
  hanldeChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  // Метод відправлення форми. Формує зі стейту контакт та передає у зовнішній метод
  hanldeSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state); // Зовнішній метод в пропсах класу

    this.resetForm();
  };

  // Ресет  поля форми (після відправлення)
  resetForm = () => {
    this.setState({
      id: '',
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.hanldeSubmit}>
        <label className={styles.label}>
          Name
          <input
            type="text"
            name="name"
            placeholder="Contact name"
            aria-label="Input for your name"
            className={styles.input}
            value={this.state.name} // Пишемо значення в стейт
            onChange={this.hanldeChange} // Метод нагляду
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={styles.label}>
          Number
          <input
            type="tel"
            name="number"
            placeholder="Phone number"
            aria-label="Input for your phone number"
            className={styles.input}
            value={this.state.number} // Пишем значение в стейт
            onChange={this.hanldeChange} // Наблюдающий метод
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
          />
        </label>
        <div className={styles.button__wrapper}>
          <button type="submit" className={styles.button}>
            Add contact
          </button>
        </div>
      </form>
    );
  }
}

export default ContactForm;
