async function fetchBreedList({ queryKey }) {
  const animal = queryKey[1];
  const apiRes = await fetch(
    `https://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );
  if (!apiRes.ok) {
    throw new Error(`details/${animal} fetch failed`);
  }
  return apiRes.json();
}
export default fetchBreedList;
