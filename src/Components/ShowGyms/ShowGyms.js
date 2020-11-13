import React from 'react';
import {gyms} from '../../data/gyms.json';
import {Card,Button} from 'react-bootstrap';


function ShowGyms () {

  const test = (e) =>  console.log(e.target)

 return(
<div className="showgyms__container" >
  {gyms.map(gym => (
    <div key={gym.name} className="render__gym" >
     <Card
     style={{ width: '18%'}}>
     <Card.Img variant="top" src={gym.image} />
      <Card.Body>
        <Card.Title> <strong>{gym.name}</strong></Card.Title>
        <Card.Text>
          {gym.description.slice(0, 80)}...
        </Card.Text>

        <Button  onClick={test} variant="primary">Read More</Button>

      </Card.Body>
    </Card>
      </div>
    ))}
    </div>
  )
};

export default ShowGyms;
