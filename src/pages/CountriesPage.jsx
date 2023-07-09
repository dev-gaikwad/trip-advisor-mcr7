import React from 'react';
import { data } from '../data/data';

import ImageCard from '../components/ImageCard';
import { useParams } from 'react-router-dom';

const CountriesPage = () => {
  const { name } = useParams();

  const continentDetails = data.continents.find(
    (continent) => continent.name === name
  );
  return (
    <main>
      <section>
        <h2>Which Country Would You Like To Tour ?</h2>
        <div className='card-container'>
          {continentDetails?.countries.map(({ id, name, image }) => (
            <ImageCard
              key={id}
              name={name}
              image={image}
              current={'country/'}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default CountriesPage;
