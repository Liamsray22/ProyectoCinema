import React from 'react';
import './css/App.css';
import Principal from './pages/principal'
import FacturaPage from './pages/facturaPage'
import TaquillaPage from './pages/taquillasPage'
import {BrowserRouter, Route, Switch} from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Principal} />
            <Route exact path="/factura" component={FacturaPage} />
            <Route exact path="/taquilla" component={TaquillaPage} />
            {/* <Route component={NotFound} /> */}

        </Switch>
        </BrowserRouter>
    // <div className="App">
    //   <Principal/>
    // </div>
  );
}

export default App;
