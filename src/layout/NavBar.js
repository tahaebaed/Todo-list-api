import { Avatar } from '@mui/material';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Buttons from '../components/Buttons';
import { useDispatch, useSelector } from 'react-redux';
import { logOutRequest } from '../store/auth/actions';
import { auth } from '../store/auth/sagas';
import '../scss/Bar.scss';

const NavBar = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.auth);
  console.log(auth);
  useEffect(() => {
    // dispatch(getTokenReq);
  }, [auth]);

  return (
    <div className='bar_menu w-100'>
      <nav className='navbar navbar-expand-lg navbar-light  container'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            TaskyList
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarTogglerDemo02'
            aria-controls='navbarTogglerDemo02'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              <li className='nav-item mt-1'>
                <Link className='nav-link active' aria-current='page' to='/'>
                  HOME
                </Link>
              </li>
              <li className={`nav-item mt-1 ${userData}`}>
                <Link className='nav-link' to='/Tasks'>
                  TASKS
                </Link>
              </li>
              <li className={`nav-item mt-1 `}>
                <Link className='nav-link' to='/SignIn'>
                  SIGN IN
                </Link>
              </li>
              <li className='nav-item mt-1'>
                <Link className={`nav-link `} to='/SignUp'>
                  SIGN UP
                </Link>
              </li>
              <li className={`nav-item mt-1 `}>
                <Buttons
                  styles={'navBar-Btn'}
                  edit={{}}
                  shape={'text'}
                  colors={'primary'}
                  label={'log out'}
                  clicked={() => {
                    dispatch(logOutRequest());
                  }}
                />
              </li>
              <li className={`nav-item mt-1 `}>
                <Link className='nav-link align-item-center' to='/SignUp'>
                  <Avatar
                    src='/broken-image.jpg'
                    sx={{ width: 24, height: 24 }}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
