import React, { FC } from 'react'
import { CharacterEntityVm } from './character.vm';
import * as classes from './character.styles';

interface Props {
    character: CharacterEntityVm;
  }
const CharacterComponent : FC<Props> = (props) => {

    const { character} = props;
    return (
        <div className={classes.root}>
    
          <ul>
          </ul>
        </div>
      );
}

export default CharacterComponent