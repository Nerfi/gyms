import React,{useState} from 'react';
import ReactMapGL, {Marker,Popup} from 'react-map-gl';

function MapboxComponent({viewport, setter, gyms, latitude, longitude}) {

   const [selectedGym, setSelected] = useState(null);

  return(
       <ReactMapGL

      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_TOKEN}
      onViewportChange={viewport => {
          //setter(viewport)
          setter(viewport)
      }}
      mapStyle="mapbox://styles/nerfi/ckh52m6tn02fe1an3lv1yruqh"
      >


      {gyms ?  gyms.map(gym => (

        <Marker key={gym.name}
         latitude={gym.geometry.coordinates[0] || latitude}
        longitude={gym.geometry.coordinates[1] || longitude}
        >
        <button onClick={e => {
          e.preventDefault();
          setSelected(gym);
        }}>
          <img src={gym.image} alt="unsplash" style={{width: '40px'}}/>
        </button>


        </Marker>
        )) : null }

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
  );
};


export default MapboxComponent;
