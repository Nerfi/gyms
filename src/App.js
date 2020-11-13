import React from 'react';
import './App.css';
import Gym from '../src/Components/Gym/Gym';
import ShowGyms from '../src/Components/ShowGyms/ShowGyms';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMaps from '../src/Components/Navbar/Navbar';

function App() {

  return (
    <>
    <NavbarMaps/>

     <ShowGyms/>
     <Gym/>

    </>
  );
}

export default App;
