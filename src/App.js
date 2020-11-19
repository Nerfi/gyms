import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMaps from '../src/Components/Navbar/Navbar';
import Home from '../src/Components/Home/Home';
import SingleGym from '../src/Components/SingleGym/SingleGym';

function App() {


  return (
    <div className="App">
    <Router>
      <NavbarMaps/>

      <Switch>

      <Route  path="/gym/:id">
       <SingleGym/>
      </Route>

      <Route exact path="/">
       <Home />
      </Route>


      </Switch>

    </Router>


    </div>
  );
}

export default App;
