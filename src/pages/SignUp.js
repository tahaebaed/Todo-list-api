import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormsInputs from '../components/FormsInputs';
import Buttons from '../components/Buttons';
import { useNavigate } from 'react-router';
import signupImg from '../assets/signup.svg';
import { useDispatch } from 'react-redux';
import { signUpRequest } from '../store/auth/actions';
import '../scss/pointer.scss';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      age: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'must be 15 or less ')
        .required('required'),
      lastName: Yup.string()
        .max(20, 'must be 20 or less ')
        .required('required'),
      email: Yup.string()
        .email('invalid email address')
        .required('This field is required'),
      password: Yup.string()
        .min(8, 'must be 8 or more')
        .required('This field is required')
        .matches(
          /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
        ),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref('password'), null],
        'Passwords must match'
      ),
      age: Yup.number()
        .required('required')
        .positive()
        .integer()
        .min(11, 'should be bigger than 11'),
    }),
    onSubmit: values => {
      dispatch(
        signUpRequest({
          name: values.firstName + ' ' + values.lastName,
          email: values.email,
          password: values.password,
          age: values.age,
        })
      );
      navigate('/', { replace: true });
    },
  });

  return (
    <section className='d-flex align-items-center justify-content-between mt-2 mb-0 container'>
      <div className='w-75 p-3 pe-5 me-2'>
        <img src={signupImg} className={'img-fluid'} alt='loginImg' />
      </div>
      <div className='w-50 text-center'>
        <h2>Sign Up</h2>
        <form
          onSubmit={formik.handleSubmit}
          className='d-flex flex-column w-100 just-content-center align-items-center align-self-end'
        >
          <div className='d-flex w-100 justify-content-between'>
            <FormsInputs
              styles={'mt-2 mb-3 me-2'}
              names={'firstName'}
              types={'text'}
              showenText={'First Name'}
              displayesId={'firstName outlined-basic'}
              displayes={'outlined'}
              labels={'*First Name'}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              inputValue={formik.values.firstName}
              err={formik.touched.firstName && Boolean(formik.errors.firstName)}
              helper={formik.touched.firstName && formik.errors.firstName}
            />
            <FormsInputs
              styles={'mt-2 mb-3 me-2'}
              names={'lastName'}
              types={'text'}
              showenText={'Last Name'}
              displayesId={'lastName outlined-basic'}
              displayes={'outlined'}
              labels={'*Last Name'}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              inputValue={formik.values.lastName}
              err={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helper={formik.touched.lastName && formik.errors.lastName}
            />
            <FormsInputs
              styles={'mt-2 mb-3'}
              names={'age'}
              types={'number'}
              showenText={'age'}
              displayesId={'age outlined-basic'}
              displayes={'outlined'}
              labels={'*Age'}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              inputValue={formik.values.age}
              err={formik.touched.age && Boolean(formik.errors.age)}
              helper={formik.touched.age && formik.errors.age}
            />
          </div>
          <FormsInputs
            styles={'mt-2 mb-3 w-100'}
            names={'email'}
            types={'email'}
            showenText={'Please Enter Your Email'}
            displayesId={'email outlined-basic'}
            displayes={'outlined'}
            labels={'*Email'}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            inputValue={formik.values.email}
            err={formik.touched.email && Boolean(formik.errors.email)}
            helper={formik.touched.email && formik.errors.email}
          />
          <FormsInputs
            styles={'mt-2 mb-3 w-100'}
            types={'password'}
            showenText={'Please Enter Your password'}
            name={'password'}
            displayesId={'password'}
            displayes={'outlined'}
            labels={'*password'}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            inputValue={formik.values.password}
            err={formik.touched.password && Boolean(formik.errors.password)}
            helper={formik.touched.password && formik.errors.password}
          />
          <FormsInputs
            styles={'mt-2 mb-3 w-100'}
            types={'password'}
            showenText={'Please Enter Your password'}
            name={'confirmPassword'}
            displayesId={'confirmPassword'}
            displayes={'outlined'}
            labels={'*password'}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            inputValue={formik.values.confirmPassword}
            err={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helper={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          />
          <Buttons
            styles={'w-25'}
            sx={{ mt: '1rem' }}
            colors={'primary'}
            size={'large'}
            shape={'contained'}
            TSubmit={'submit'}
            label={'login'}
          />
          <p className='mt-2'>
            Already Have Account,
            <Buttons
              edit={{ ml: '0' }}
              styles={'btn'}
              colors={'primary'}
              howBig={'small'}
              shape={'text'}
              TSubmit={'button'}
              label={'SIGN IN'}
              clicked={() => navigate('/Signin')}
            />
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
