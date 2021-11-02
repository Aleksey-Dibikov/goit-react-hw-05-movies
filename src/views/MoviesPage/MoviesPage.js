import PropTypes from 'prop-types';
import { useState } from 'react';
import s from './MoviesPage.module.css';

function MoviesPage({ onSubmit }) {
  const [value, setValue] = useState('');

  const handleInputChange = event => {
    setValue(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (value.trim() === '') {
      alert('Bведите запрос!!!');
      return;
    }
    onSubmit(value);
    setValue('');
  };

  return (
    <header className={s.MoviesPage}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleInputChange}
          value={value}
        />
      </form>
    </header>
  );
}

MoviesPage.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.string,
};

export default MoviesPage;
