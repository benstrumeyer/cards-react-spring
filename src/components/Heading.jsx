import React from "react";

function Heading() {
  const currentDate = new Date().getHours();

  const greetingStyle = {
    color: String
  };

  let greeting;

  if (currentDate < 12 && currentDate > 0) {
    greeting = "Good morning!";

    greetingStyle.color = "red";
  } else if (currentDate > 12 && currentDate < 6) {
    greeting = "Good afternoon!";

    greetingStyle.color = "green";
  } else {
    greeting = "Good evening!";

    greetingStyle.color = "blue";
  }

  return <h1 style={greetingStyle}>{greeting}</h1>;
}

export default Heading;
