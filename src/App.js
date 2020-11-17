import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Gym from '../src/Components/Gym/Gym';
import ShowGyms from '../src/Components/ShowGyms/ShowGyms';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMaps from '../src/Components/Navbar/Navbar';




function App() {

  return (
    <>
    <Router>
      <NavbarMaps/>

    <div className="splitScreen ">
      <div className="topPane ">
        <ShowGyms/>
      </div>

    <div className="bottomPane">
       <Gym/>
    </div>

    </div>

    </Router>
    </>
  );
}

export default App;
