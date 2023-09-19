import { useState } from "react";

const NotUsingSWR = () => {
  const [charaters, setCharacters] = useState({ info: [], results: [] });

  return (
    <div>
      <h1>Not Using SWR</h1>
    </div>
  );
};

export default NotUsingSWR;
