import React,{useState} from 'react';
import ReactMapGL, {Marker,Popup} from 'react-map-gl';

function MapboxComponent({viewport, setter, gyms, latitude, longitude, data}) {

   const [selectedGym, setSelected] = useState(null);

   const [mapbox, setMapbox] = useState({
      latitude: latitude,
      longitude: longitude,
      width: '55vh',
      height: '100vh',
      zoom: 3.5
   });


  return(
       <ReactMapGL

      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_TOKEN}
      onViewportChange={viewport => {
         //setMapbox(viewport);
         //setter(viewport)
         return setter ? setter(viewport) : null

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
        <img src={data.image} alt="unsplashj" style={{width: '40px'}}/>
        </Marker>
      }

      {
        selectedGym ?

          <Popup latitude={selectedGym.geometry.coordinates[0]} longitude={selectedGym.geometry.coordinates[1]} onClose={() =>  {
            setSelected(null);
          }}
        >
        <div>
        <h2>{selectedGym.name}</h2>
        <p>{selectedGym.country}</p>

        </div>
    </Popup>

     : null
   }

   {
     viewport ? (
      <Popup latitude={viewport.latitude} longitude={viewport.longitude}>
        <div>
          <h2>{data && data.name}</h2>
          <p>{ data && data.country}</p>
          </div>
        </Popup>

    ): null

   }
  </ReactMapGL>
  );
};


export default MapboxComponent;
