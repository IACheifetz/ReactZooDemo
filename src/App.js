import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Fight from './Fight.js';
import Parade from './Parade.js';
import AdminPage from './AdminPage';
import ZooOpen from './ZooOpen';

function App() {
  

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        <div className="App">
          <Route path="/admin">
            <AdminPage />
          </Route>
          <Fight />
          <ZooOpen />
          <Parade />
        
        </div>
      </Switch>
    </Router>
    
  );
}

export default App;
