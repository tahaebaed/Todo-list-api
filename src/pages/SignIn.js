import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormsInputs from '../components/FormsInputs';
import Buttons from '../components/Buttons';
import logoImg from '../assets/loginImg.jpg';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import SkeletonSignIn from './Skelteon';
import { useNavigate } from 'react-router';
import { loginRequest } from '../store/auth/actions';
import '../scss/pointer.scss';

const SignIn = props => {
  const [loaded, setloaded] = useState(false);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      setloaded(true);
    }, 4000);
  }, [loaded]);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invaild Email Address').required('Required'),
      password: Yup.string()
        .min(8, 'must be 8 or more')
        .required('This field is required')
        .matches(
          /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          'You haved entered Wrong Email Or Password'
        ),
    }),
    onSubmit: values => {
      dispatch(
        loginRequest({
          email: values.email,
          password: values.password,
        })
      );
      navigate('/', { replace: true });
    },
  });

  return loaded ? (
    <section className='d-flex align-items-center mt-2 mb-0'>
      <div className='w-100 text-center'>
        <h2>Login</h2>
        <form
          onSubmit={formik.handleSubmit}
          className='d-flex flex-column w-100 justify-content-center align-items-center'
        >
          <FormsInputs
            styles={'mt-2 mb-3 w-50'}
            names={'email'}
            types={'email'}
            showenText={'Please Enter Your Email'}
            displayesId={'email outlined-basic'}
            displayes={'outlined'}
            labels={'Email'}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            inputValue={formik.values.email}
            err={formik.touched.email && Boolean(formik.errors.email)}
            helper={formik.touched.email && formik.errors.email}
          />

          <FormsInputs
            styles={'mt-2 mb-3  w-50'}
            types={'password'}
            showenText={'Please Enter Your password'}
            name={'password'}
            displayesId={'password'}
            displayes={'outlined'}
            labels={'password'}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            inputValue={formik.values.password}
            err={formik.touched.password && Boolean(formik.errors.password)}
            helper={formik.touched.password && formik.errors.password}
          />
          <Buttons
            edit={{}}
            colors={'primary'}
            howBig={'large'}
            shape={'contained'}
            TSubmit={'submit'}
            label={'login'}
          />
          <p className='mt-2'>
            Don't Have Account,
            <Buttons
              edit={{ ml: '0', p: '0' }}
              styles={'btn'}
              colors={'primary'}
              howBig={'small'}
              shape={'text'}
              TSubmit={'button'}
              cursor={{ cursor: 'pointer' }}
              label={'SIGN UP'}
              clicked={() => navigate('/SignUp')}
            />
          </p>
        </form>
      </div>

      <div className='w-50'>
        <img src={logoImg} alt='loginImg' />
      </div>
    </section>
  ) : (
    <SkeletonSignIn />
  );
};

export default SignIn;
