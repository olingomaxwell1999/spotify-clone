import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.scss';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
