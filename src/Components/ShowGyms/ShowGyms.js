import React from 'react';
import {gyms} from '../../data/gyms.json';
import {Card,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './ShowGyms.css';


function ShowGyms () {

return(
  <div className="showgyms__container" >
    {gyms.map(gym => (

      <div key={gym.name} className="render__gym" >
       <Card
        >

       <Card.Img variant="top" src={gym.image} />
        <Card.Body>
          <Card.Title> <strong>{gym.name}</strong></Card.Title>
          <Card.Text>
            {gym.description.slice(0, 80)}...
          </Card.Text>
             <Button variant="primary">

            <Link style={{color: 'black'}} to={`/gym/${gym.id}`} >
              See Gym
            </Link>
            </Button>

        </Card.Body>
      </Card>
        </div>
      ))}
      </div>
  )
};

export default ShowGyms;
