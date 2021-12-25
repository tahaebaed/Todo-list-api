import React from 'react';
import Buttons from '../components/Buttons';
import '../scss/home.scss';

const Home = () => {
  return (
    <section>
      <div className='container d-flex align-items-center justify-content-center flex-column'>
        <h1>Welcome To Tasky List</h1>
        <p>
          We are the place To make your todo-list content easily and save it all
          in your account with highly secure
        </p>
        <div>
          <Buttons
            label={'GET START NOW'}
            howBig={'medium'}
            edit={{ mr: '1rem' }}
            shape={'contained'}
          />
          <Buttons
            label={'GET START NOW'}
            howBig={'medium'}
            shape={'outlined'}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
