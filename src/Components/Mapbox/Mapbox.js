import React,{useState} from 'react';
import ReactMapGL, {Marker,Popup} from 'react-map-gl';

function MapboxComponent({viewport, setter, gyms, latitude, longitude}) {

   const [selectedGym, setSelected] = useState(null);

   const [mapbox, setMapbox] = useState({
      latitude: latitude,
      longitude: longitude,
      width: '55vh',
      height: '100vh',
      zoom: 3.5
   });

   console.log(viewport)


  return(
       <ReactMapGL

      {...viewport }
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_TOKEN}
      onViewportChange={viewport => {
          //setter(viewport)
          setMapbox(viewport)
          //setter(viewport)
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
        )) :

        <Marker
        latitude={latitude}
        longitude={longitude}

        >
        <button onClick={e => {
          e.preventDefault();
          setSelected(mapbox);
        }}>
          <img src={viewport.image} alt="unsplash" style={{width: '40px'}}/>
        </button>


        </Marker> }

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
