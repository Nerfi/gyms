import React,{useState} from "react";
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
    image
   } = gyms.find(gym => gym.id == id)

   //pulling the latitude and longitude
   const latitude2 = gyms.map(gym => gym.geometry.coordinates.[0]);
   const longitude = gyms.map(gym => gym.geometry.coordinates[1]);

   console.log(typeof(latitude2))
   const parse = parseInt(latitude2);
   console.log(parse);

   console.log(latitude2.length)
   //el error esta en que esto loggeadn todos y cada una de las latitudes de cada object,
   //lo cual no es lo que quiero, tengo que probar renderizando solo una, la que coincida con el id de cada gym in this case

   const [newSetter, setSetter ] = useState({
    latitude: parseInt(latitude2),
    longitude: parseInt(longitude)

   });


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
   {newSetter.latitude && newSetter.longitude ?  <MapboxComponent latitude={latitude2} longitude={longitude}   setter={setSetter}/>: <p>not working </p>}


      </div>

</>
  );
}

export default SingleGym;
