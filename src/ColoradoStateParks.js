import React from "react";
import howManyParks from "./parks/howManyParks";
import react from "react";

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return <h1>Colorado State Parks!</h1>;
}

export default ColoradoStateParks