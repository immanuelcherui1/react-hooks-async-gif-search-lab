import React, { useState } from 'react';

const GifSearch = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Enter search term..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default GifSearch;
