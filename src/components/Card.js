import React from 'react';

const Card = ({ headline, desc, icon, styles }) => {
  return (
    <div
      class={`card ${styles}`}
      style={{
        width: '18rem;',
        margin: '3rem 0;',
        borderLeft: '2px solid ;',
        borderLeftColor: '#f7b02c',
        borderTop: '0',
        borderBottom: '0',
        borderRight: '0',
      }}
    >
      {/* <img src='...' class='card-img-top' alt='...' /> */}
      <div class='card-body'>
        <h5 class='card-title'>{headline}</h5>
        <p class='card-text'>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
