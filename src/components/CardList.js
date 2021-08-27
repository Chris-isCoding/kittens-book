import React from 'react';
import Card from './Card.js';

const CardList = ({ kittens }) => (
  <div>
    {kittens.map((kitten) => (
      <Card
        key={kitten.id}
        id={kitten.id}
        name={kitten.name}
        email={kitten.email}
      />
    ))}
  </div>
);

export default CardList;
