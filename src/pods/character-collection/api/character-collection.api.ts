
export const getCharacterCollection = async () => {
  const response = await fetch(`${process.env.BASE_API_URL}/characters`)
  const character = await response.json();
  return character;
}