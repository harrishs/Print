import React, { useState } from "react";

const Main = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button onClick={setToggle(prevState => !prevState)}>Explore</button>
    </div>
  );
};
