import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

export default function useBreedList(animal) {
  const results = useQuery(["breeds", animal.toLowerCase()], fetchBreedList);
  return [results?.data?.breeds ?? [], results.status];
}
