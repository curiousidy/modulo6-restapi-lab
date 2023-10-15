import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } = useCharacterCollection();
 
  React.useEffect(() => {
    loadCharacterCollection();
  }, []);



  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
     
    />
  );
};
