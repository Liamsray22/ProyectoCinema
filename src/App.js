import React from 'react';
import './css/App.css';
import Principal from './pages/principal'
import {BrowserRouter, Route, Switch} from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Principal} />
        </Switch>
        </BrowserRouter>

  );
}

export default App;
