import { Characters } from "./character.api-model";

export const getCharacter = async (id: number) => {
  const response = await fetch(`${process.env.BASE_API_URL}/characters/${id}`)
  const character = await response.json();
  return character;
}

export const updateCharacter = async (character: Characters, id: number) => {
  try{
      const response = await fetch(`http://localhost:3000/characters/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(character),
      })
      if(response.ok) return 'ok'
  }catch(error){
    return 'no se ha podido guardar los cambios'
  }
}
