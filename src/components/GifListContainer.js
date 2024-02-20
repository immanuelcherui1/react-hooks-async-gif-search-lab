import React, { useState } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

const GifListContainer = () => {
  const [gifs, setGifs] = useState([]);

  const fetchGifs = searchTerm => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=OSNK88MYZ4fkbFCR3Yd8dH2jeIfcwLIY&limit=3`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setGifs(data.data.slice(0, 3));
      })
      .catch(error => {
        console.error('Error fetching gifs:', error);
      });
  };

  const handleSubmit = searchTerm => {
    fetchGifs(searchTerm);
  };

  return (
    <div>
      <GifSearch onSubmit={handleSubmit} />
      <GifList gifs={gifs} />
    </div>
  );
};

export default GifListContainer;
