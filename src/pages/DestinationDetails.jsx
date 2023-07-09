import React from 'react';
import { data } from '../data/data';

import '../css/DestinationDetails.css';

import { useParams } from 'react-router-dom';

const DestinationDetails = () => {
  const { name } = useParams();

  const destination = data.continents
    .flatMap((continent) => continent.countries)
    .flatMap((country) => country.destinations)
    .find(
      (destination) => destination.name.toLowerCase() === name.toLowerCase()
    );
  return (
    <main>
      {destination && (
        <section>
          <h2>{destination.name}</h2>
          <div className='container'>
            <div className='imageCard'>
              <img src={destination.image} alt='' />
            </div>
            <div className='details'>
              <p>
                <span>Description : </span>
                {destination.description}
              </p>
              <p>
                <span>Location : </span>
                {destination.location}
              </p>
              <p>
                <span>Ratings : </span>
                {destination.ratings}
              </p>
              <p>
                <span>Reviews : </span>
                {destination.reviews}
              </p>
              <p>
                <span>Opening Hours : </span>
                {destination.openingHours}
              </p>
              <p>
                <span>Ticket Price : </span>
                {destination.ticketPrice}
              </p>
              <p>
                <span>Website : </span>
                {destination.website}
              </p>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default DestinationDetails;
