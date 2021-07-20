import React from "react";

const Card = ({ name, email, id }) => (
  <div className="tc grow bg-light-blue br3 pa3 ma2 dib bw2 shadow-5">
    <img
      alt="sweet looking cartoon kitten face"
      src={`https://robohash.org/${id}?set=set4&size=200x200`}
    />
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  </div>
);

export default Card;
