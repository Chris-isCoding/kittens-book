import React from 'react';
import Card from './Card.js';

const CardList = ({ kittens }) => (
  <div>
    {kittens.map((kitten, i) => (
      <Card key={i} id={kitten.id} name={kitten.name} email={kitten.email} />
    ))}
  </div>
);

export default CardList;
