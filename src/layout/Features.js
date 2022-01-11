import React from 'react';
import { staticData } from '../store/static data/staticData';
import '../scss/features.scss';
import Card from '../components/Card';

function Features() {
  const { cards } = staticData;
  console.log(cards);
  const card = cards.map(e => (
    <Card headline={e.title} desc={e.discrpetion} key={e.id} styles={'col-3'} />
  ));
  return (
    <section className='mt-0 pt-0'>
      <h2 className='after text-center'>Features</h2>
      <div className='row justify-content-around' style={{ margin: '3rem' }}>
        {card}
      </div>
    </section>
  );
}

export default Features;
