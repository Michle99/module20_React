import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBarWrapper = styled.div`
  margin: 20px 0;
  text-align: center;
`;

const SearchInput = styled.input`
  padding: 10px;
`;

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <SearchBarWrapper>
      <SearchInput
        type="text"
        placeholder="Search by name"
        value={query}
        onChange={handleChange}
      />
    </SearchBarWrapper>
  );
};

export default SearchBar;
