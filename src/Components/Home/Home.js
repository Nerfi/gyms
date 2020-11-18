import React from 'react';
import './Home.css';
import ShowGyms from '../ShowGyms/ShowGyms';
import Gym from '../Gym/Gym';

function Home() {
  return(
    <>
      <div className="splitScreen ">
        <div className="topPane ">
          <ShowGyms/>
        </div>

      <div className="bottomPane">
         <Gym/>
      </div>

    </div>
    </>
  );
};

export default Home;
