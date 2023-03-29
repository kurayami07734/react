import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {!pets.length ? (
        <h1>No Pets Found..</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            images={pet.images}
            location={`${pet.city} - ${pet.state}`}
            id={pet.id}
            breed={pet.breed}
            key={pet.id}
          />
        ))
      )}
    </div>
  );
};
export default Results;
