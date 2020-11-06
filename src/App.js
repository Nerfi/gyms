import React, {useState} from 'react';
import ReactMapGL, {Marker,Popup} from 'react-map-gl';
import {gyms} from '../src/data/gyms.json';
import './App.css';



function App() {
  //setting the viewpots state, the default
  const [viewport, setViewport] = useState({
    latitude: 13.75398,
    longitude: 100.50144,
    width: '100vw',
    height: '100vh',
    zoom: 10
  });

  //taking the selected gym from the user
  //at first the user did not choose any gym yet
  const [selectedGym, setSelected] = useState(null);

  return (
    <div>
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
          <img src="https://images.unsplash.com/photo-1521800641212-77d98bb90d21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80" alt="unsplash" style={{width: '80px'}}/>
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

export default App;
/*

 <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_TOKEN}
        mapStyle="mapbox://styles/nerfi/ckh52m6tn02fe1an3lv1yruqh"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {gyms.map(gym => (
          <Marker
            key={gym.name}
            latitude={gym.geometry.coordinates[1]}
            longitude={gym.geometry.coordinates[0]}
          >
            <button
              className="marker-btn"
              onClick={e => {
                e.preventDefault();
                setSelectedPark(park);
              }}
            >
              <img src="/skateboarding.svg" alt="Skate Park Icon" />
            </button>
          </Marker>
        ))}

        {selectedPark ? (
          <Popup
            latitude={selectedPark.geometry.coordinates[1]}
            longitude={selectedPark.geometry.coordinates[0]}
            onClose={() => {
              setSelectedPark(null);
            }}
          >
            <div>
              <h2>{selectedPark.properties.NAME}</h2>
              <p>{selectedPark.properties.DESCRIPTIO}</p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
    */
