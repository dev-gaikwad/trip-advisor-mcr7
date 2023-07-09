import React from 'react';

import '../css/ImageCard.css';
import { useNavigate } from 'react-router-dom';

const ImageCard = ({ name, image, current = '' }) => {
  const navigate = useNavigate();
  return (
    <article onClick={() => navigate(`/${current}${name}`)}>
      <div className='imageCard'>
        <img src={image} alt='' />
        <p>{name}</p>
      </div>
    </article>
  );
};

export default ImageCard;
