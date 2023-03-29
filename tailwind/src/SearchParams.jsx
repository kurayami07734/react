import { useState, useContext } from "react";
import AdoptedPetContext from "./AdoptedPetContext";
import useBreedList from "./useBreedList";
import fetchSearch from "./fetchSearch";
import Results from "./Results";
import { useQuery } from "@tanstack/react-query";

function SearchParams() {
  const animals = ["Dog", "Bird", "Cat", "Reptile"];
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);
  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];
  const [adoptedPet, _] = useContext(AdoptedPetContext);

  return (
    <div className="my-0 mx-auto w-11/12">
      <form
      className="p-10 mb-10 rounded-lg bg-gray-200 shadow-lg flex flex-col items-center justify-center"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            animal: formData.get("animal") ?? "",
            location: formData.get("location") ?? "",
            breed: formData.get("breed") ?? "",
          };
          setRequestParams(obj);
        }}
      >
        {adoptedPet && (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
            <h3>{adoptedPet.name}</h3>
          </div>
        )}
        <label htmlFor="location">
          Location
          <input type="text" className="mb-5 block w-60" id="location" placeholder="location" name="location" />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            name="animal"
            id="animal"
            className="mb-5 block w-60"
            onChange={(e) => setAnimal(e.target.value)}
          >
            <option />
            {animals.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select className="mb-5 block w-60 disabled:opacity-60" name="breed" disabled={breeds.length === 0} id="breed">
            <option />
            {breeds.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>
        <button className="rounded px-6 py-2 text-white hover:opacity-50 border-none bg-orange-500">Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
}
export default SearchParams;
