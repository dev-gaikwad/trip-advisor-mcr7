import React from 'react';
import { data } from '../data/data';

import ImageCard from '../components/ImageCard';
import { useParams } from 'react-router-dom';

const DestinationsPage = () => {
  const { name } = useParams();

  const country = data.continents
    .flatMap((continent) => continent.countries)
    .find((country) => country.name.toLowerCase() === name.toLowerCase());

  return (
    <main>
      <section>
        <h2>Which Destination appeals you the most ?</h2>
        <div className='card-container'>
          {country?.destinations.map(({ id, name, image }) => (
            <ImageCard
              key={id}
              name={name}
              image={image}
              current={'details/'}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default DestinationsPage;
