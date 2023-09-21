import { SearchForm, Button, Input } from './Searchbar.styled';
import { useState } from 'react';

export const Searchbar = ({ getQuery, value, onChange }) => {
  const [query, setQuery] = useState(value);

  return (
    <header>
      <SearchForm
        onSubmit={evt => {
          evt.preventDefault();
        
          // проверка на пустой запрос
          if (evt.target.elements.query.value === '') {
            return alert(`Пустая строка! Введите слово для поиска!`);
          }

          onChange(query);
          evt.target.reset();
        }}
      >
        <Button type="submit">
          <span>Search</span>
        </Button>

        <Input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search videos"
          onChange={evt => setQuery(evt.target.value)}
        />
      </SearchForm>
    </header>
  );
};
