export const getCharacter = async (id: number) => {
  const response = await fetch(`${process.env.BASE_API_URL}/character/${id}`)
  const character = await response.json();
  return character;
}
