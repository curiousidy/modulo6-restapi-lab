import React, { useEffect } from 'react';
import { useCharacter } from './character.hook';
import { updateCharacter } from './api';
import CharacterComponent from './character.component';
import { useNavigate } from 'react-router-dom';


const CharacterContainer = () => {
  const { character, loadCharacter } = useCharacter(); 
  const navigate = useNavigate();

  const handleSave = async (character) => {
    try {
      const result = await updateCharacter(character, character.id);
    
    } catch (error) {
      console.error(error);
    }
  }
 
  useEffect(() => {
    loadCharacter();
  }, []);

  return (
    character && <CharacterComponent character={character} onSave={handleSave} />
  )
}

export default CharacterContainer;
