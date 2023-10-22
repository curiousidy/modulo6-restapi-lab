import React from 'react'
import { useCharacter } from './character.hook';
import CharacterComponent from './character.component';

const CharacterContainer = () => {
  const { character, loadCharacter } = useCharacter();
 
  React.useEffect(() => {
   loadCharacter();
  }, []);

  return (
    character && <CharacterComponent character={character} />
  )
}

export default CharacterContainer