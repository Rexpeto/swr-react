import { useState, useEffect } from "react";
import { rickAndMortyUrl } from "@/services";
import { charactersEmpty } from "@/models";
import axios from "axios";
import { Card } from "@/components";

const NotUsingSWR = () => {
  const [charaters, setCharacters] = useState(charactersEmpty);

  const getCharacters = async () => {
    const { data } = await axios(rickAndMortyUrl);
    setCharacters(data);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl pb-10">Not Using SWR</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {charaters.results.map((charater) => (
          <Card
            key={charater.id}
            name={charater.name}
            status={charater.status}
            image={charater.image}
          />
        ))}
      </div>
    </div>
  );
};

export default NotUsingSWR;
