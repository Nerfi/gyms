import React, {useState} from 'react';
import ReactMapGL, {Marker,Popup} from 'react-map-gl';
import './App.css';

function App() {
  //setting the viewpots state, the default
  const [viewport, setViewport] = useState({
    latitude: 37.9870400,
    longitude: -1.1300400,
    width: '100vw',
    height: '100vh',
    zoom: 10
  });

  //taking the selected gym from the user
  //at first the user did not choose any gym yet
  const [selectedGym, setSelected] = useState(null);

  //fake data in order to test the app fast
  const fakeData = {
    name: 'Some random name',
    street: 'ever green terraze',
    location: 'Thailand'
  }

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
    {/*I will need to create the API firsst in order to render a marker where the user
    click in
  */}
      <Marker latitude={viewport.latitude} longitude={viewport.longitude}>
      <button onClick={e =>{
        e.preventDefault();
        setSelected(e.target)
      }}>
        <img src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=625&q=80" alt="unsplash" style={{width: '30px'}}/>
      </button>


      </Marker>
      {selectedGym ?(
          <Popup latitude={viewport.latitude} longitude={viewport.longitude} onClose={() =>  {
            setSelected(null);
          }}>
        <div>
        <h2>{fakeData.name}</h2>
        <p>{fakeData.street}</p>

        </div>
          </Popup>
        ) : null}
    </ReactMapGL>
    </div>
  );
}

export default App;
