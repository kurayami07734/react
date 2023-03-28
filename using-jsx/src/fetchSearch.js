async function fetchSearch({ queryKey }) {
  const { animal, location, breed } = queryKey[1];
  const res = await fetch(
    `https://pets-v2.dev-apis.com/pets?animal=${animal.toLowerCase()}&location=${location}&breed=${breed}`
  );
  if (!res.ok)
    throw new Error(`Could not fetch ${animal} of ${breed} at ${location}`);
  return res.json();
}
export default fetchSearch;
