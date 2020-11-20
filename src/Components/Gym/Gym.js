import React, {useState} from 'react';
import ReactMapGL, {Marker,Popup} from 'react-map-gl';
import {gyms} from '../../data/gyms.json';
import './Gym.css';
import MapboxComponent from '../Mapbox/Mapbox';


function Gym() {
  //setting the viewpots state, the default
  const [viewport, setViewport] = useState({
    latitude: 12.55398,
    longitude: 100.50144,
    width: '55vw',
    height: '100vh',
    zoom: 3.5
  });

  const gymsIteration = gyms;


  return (
    <div className="gym__container">
      <MapboxComponent
      viewport={viewport}
      gyms={gymsIteration}
    />
    </div>
  );
}

export default Gym;
