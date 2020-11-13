import React, {useState} from 'react';
import ReactMapGL, {Marker,Popup} from 'react-map-gl';
import {gyms} from '../../data/gyms.json';
import './Gym.css';



function Gym() {
  //setting the viewpots state, the default
  const [viewport, setViewport] = useState({
    latitude: 13.75398,
    longitude: 100.50144,
    width: '65vw',
    height: '100vh',
    zoom: 3
  });

  //taking the selected gym from the user
  //at first the user did not choose any gym yet
  const [selectedGym, setSelected] = useState(null);

  return (
    <div className="gym__container">
    <ReactMapGL

      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_TOKEN}
      onViewportChange={viewport => {
        setViewport(viewport);
      }}
      mapStyle="mapbox://styles/nerfi/ckh52m6tn02fe1an3lv1yruqh"
      >


      {gyms.map(gym => (

        <Marker key={gym.name}
         latitude={gym.geometry.coordinates[0]}
        longitude={gym.geometry.coordinates[1]}
        >
        <button onClick={e => {
          e.preventDefault();
          setSelected(gym);
        }}>
          <img src={gym.image} alt="unsplash" style={{width: '40px'}}/>
        </button>


        </Marker>
        ))}

      {selectedGym ? (

          <Popup latitude={selectedGym.geometry.coordinates[0]} longitude={selectedGym.geometry.coordinates[1]} onClose={() =>  {
            setSelected(null);
          }}
        >
        <div>
        <h2>{selectedGym.name}</h2>
        <p>{selectedGym.country}</p>

        </div>
          </Popup>
        ) : null}
    </ReactMapGL>
    </div>
  );
}

export default Gym;
