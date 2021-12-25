import './App.scss';
import NavBar from './layout/NavBar';
import Ways from './routes/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className='App'>
      <NavBar />
      <Ways />
    </div>
  );
}

export default App;
