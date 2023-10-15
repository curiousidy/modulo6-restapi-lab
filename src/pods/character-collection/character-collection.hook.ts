import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';
import { useState } from 'react';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = useState<CharacterEntityVm[]>(
    []
  );

  const loadCharacterCollection = () => {
    getCharacterCollection().then((data) => {
      const {results} = data;
      setCharacterCollection(mapToCollection(results,mapFromApiToVm));
    }
    );
  };  

  return { characterCollection, loadCharacterCollection };
};
