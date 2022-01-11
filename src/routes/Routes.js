import { Routes, Route } from 'react-router-dom';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Index from '../layout/Index';
import Tasks from '../pages/Tasks';

const Ways = () => {
  return (
    <Routes>
      <Route path='/' exact element={<Index />} />
      <Route path='/SignIn' exact element={<SignIn />} />
      <Route path='/SignUp' element={<SignUp />} />
      <Route path='/Tasks' element={<Tasks />} />
    </Routes>
  );
};

export default Ways;
