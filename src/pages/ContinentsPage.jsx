import React from 'react';
import { data } from '../data/data';

import ImageCard from '../components/ImageCard';

const ContinentsPage = () => {
  return (
    <main>
      <section>
        <h2>Which Continent Would You Like To Visit ?</h2>
        <div className='card-container'>
          {data.continents.map(({ id, name, image }) => (
            <ImageCard
              key={id}
              name={name}
              image={image}
              current={'continent/'}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ContinentsPage;
