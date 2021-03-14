import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Main from '../Main/Main';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    </BrowserRouter>
  );
}

export default App;
