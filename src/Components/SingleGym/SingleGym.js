import React from "react";
import { useParams } from "react-router-dom";
import { gyms } from "../../data/gyms.json";
import {Card} from 'react-bootstrap';
import './SingleGym.css';
import MapboxComponent from '../Mapbox/Mapbox';


function SingleGym() {

  const { id } = useParams();
  const  {
    website,
    name,
    description,
    address,
    image,
    geometry,
    country
   } = gyms.find(gym => gym.id == id)

 const data = {name, description,image, country };

  const {coordinates} = geometry;
  const latitude = coordinates[0];
  const longitude = coordinates[1];

  const chanchanc = {
    width: '75vw',
    height: '80vh',
    zoom: 2,
    latitude: latitude,
    longitude: longitude
  };



  return (
    <>
    <h1 className="singleGym__title">{name}</h1>

    <div className="singleGym__container">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Img variant="top" src={image} />
          <Card.Text className="description">
            {description}
          </Card.Text>
          <Card.Link href={website}>Visit the website</Card.Link>
        </Card.Body>
     </Card>
    </div>

   <div className="mapbox__container">
     <MapboxComponent
     latitude={latitude}
     longitude={longitude}
      viewport={chanchanc}
      data={data}

      />
   </div>

</>
  );
}

export default SingleGym;
