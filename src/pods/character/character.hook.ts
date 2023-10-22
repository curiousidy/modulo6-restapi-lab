import * as React from 'react';
import { CharacterEntityVm } from './character.vm';
import { getCharacter } from './api';
import { mapFromApiToVm } from './character.mappers';
import { mapToCollection } from 'common/mappers';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const useCharacter = () => {
  const [character, setCharacter] = useState<CharacterEntityVm>();
  const {id} = useParams();
  const loadCharacter = () => {
    getCharacter(Number(id)).then((data) => {
      setCharacter(mapFromApiToVm(data));
    }
    );
  };  

  return { character, loadCharacter };
};