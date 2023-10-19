import React, { FC, useState } from 'react'
import { CharacterEntityVm } from './character.vm';
import * as classes from './character.styles';
import { Form, Formik } from 'formik';
import { TextFieldComponent } from 'common/components';
import { Button, TextField } from '@mui/material';

interface Props {
  character: CharacterEntityVm;
  onSave: (character: CharacterEntityVm) => void;
}


const CharacterComponent: FC<Props> = (props) => {
  const { onSave, character } = props;
  const [newSentence, setNewSentence] = useState('');

  const handleSaveClick = () => {
    onSave({ ...character, bestSentences: [...character.bestSentences, newSentence] });
  }

  return (
    <>
      <h1>{character.name}</h1>
      <ul>
        {character.bestSentences.map((sentence, index) => (
          <li key={index}>{sentence}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newSentence}
        onChange={(e) => setNewSentence(e.target.value)}
      />
      <button onClick={handleSaveClick}>Save</button>
    </>
  );
}

export default CharacterComponent;
