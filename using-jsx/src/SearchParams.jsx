import { useState, useEffect } from "react";

function SearchParams() {
  const animals = ["Dog", "Bird", "Cat", "Reptile"];
  const breeds = [];
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("Dog");
  const [pets, setPets] = useState([]);
  const [breed, setBreed] = useState("");

  useEffect(() => {
    requestPets();
  });
  async function requestPets() {
    const res = await fetch(
      `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    setPets(json.pets);
  }
  return (
    <div className="search-params">
      <form action="">
        <label htmlFor="location">
          Location
          <input
            id="location"
            placeholder="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            name="animal"
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            <option />
            {animals.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          breed
          <select
            name="breed"
            disabled={breeds.length === 0}
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      {pets.map((pet) => (
        <Pet name={pet.name} animal={pet.animal} breed={pet.breed} />
      ))}
    </div>
  );
}
export default SearchParams;
