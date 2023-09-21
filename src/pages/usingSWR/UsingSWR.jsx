import useSWR from "swr";
import { getCharacters, rickAndMortyUrl } from "@/services";
import { Card } from "@/components";

const UsingSWR = () => {
  const { data } = useSWR(rickAndMortyUrl, getCharacters, {
    refreshInterval: 10000,
    suspense: true,
  });

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl pb-10">Using SWR</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {data?.results.map((charater) => (
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

export default UsingSWR;
