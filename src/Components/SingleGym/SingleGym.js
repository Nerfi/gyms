import React from "react";
import { useParams } from "react-router-dom";
import { gyms } from "../../data/gyms.json";

function SingleGym() {
  console.log(`Gyms: ${gyms}`);

  const { id } = useParams();

  console.log(`ID: ${id}`);

  const gym = gyms.find((gym) => gym.id == id);
  const  {website, name } = gyms.find(gym => gym.id == id)
  console.log(name)
  console.log(`Gym: ${gym}`);

  return <h1> {website}{name}</h1>;
}

export default SingleGym;
