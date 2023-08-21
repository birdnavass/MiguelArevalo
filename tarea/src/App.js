import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './components/menu';
import Uno from "./components/uno";
import Dos from './components/dos';
import Tres from './components/tres';

function App() {
  return (
    <div>
      <Router>

        <Menu/>

        <div className='centro'>

          <Routes>
            
            <Route path="/uno" element={<Uno/>}/>
            <Route path="/dos" element={<Dos/>}/>
            <Route path="/tres" element={<Tres/>}/>

          </Routes>

        </div>

      </Router>
    </div>
  );
}

export default App;
