import React, { FC, useEffect, useState } from 'react'
import { CharacterEntityVm } from './character.vm';
import * as classes from './character.styles';
import { Box, Button, Card, CardContent, CardMedia, TextField} from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface Props {
  character: CharacterEntityVm;
  onSave: (character: CharacterEntityVm) => void;
}


const CharacterComponent: FC<Props> = (props) => {
  const { onSave, character } = props;
  const [sentences, setSentences] = useState<string[]>([]);
  const [isEditingSentences, setIsEditingSentences] = useState(false);
  const navigate = useNavigate();


  const handleSentences = (newSentence:string) => {
    const splitSentences = newSentence.split('\n').map(sentence => sentence.trim());
    setSentences(splitSentences);
  }

  const handleEdit = () => {
    if(isEditingSentences){
      onSave({ ...character, bestSentences: sentences });
    }
    setIsEditingSentences(!isEditingSentences);

  }
  

  return (
   
    <Card style={{ display:'flex' }}>   
      
        <div style={{ width: '400px', height: '400px', margin: 'auto' , flexDirection:'column'}}>
          <CardMedia
            component="img"
            aria-expanded
            image={character.image}
            alt="green iguana"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <CardContent>
          <TextField style={{ marginBottom: '8px',width: '100%' }} disabled label = "Name" defaultValue={character.name}  variant="outlined">{character.name}</TextField>
          <TextField style={{ marginBottom: '8px',width: '100%' }} disabled label = "Gender" defaultValue={character.gender}  variant="outlined">{character.gender}</TextField>
          <TextField style={{ marginBottom: '8px',width: '100%' }} disabled label = "Species" defaultValue={character.species}  variant="outlined">{character.species}</TextField>
          <TextField style={{ marginBottom: '8px',width: '100%' }} disabled label = "Status" defaultValue={character.status}  variant="outlined">{character.status}</TextField>
          <TextField style={{ marginBottom: '8px',width: '100%' }} disabled label = "Url" defaultValue={character.url}  variant="outlined">{character.url}</TextField>
          <TextField style={{ marginBottom: '8px',width: '100%' }} disabled label = "Location Name" defaultValue={character.location.name}  variant="outlined">{character.location.name}</TextField>
          <TextField style={{ marginBottom: '8px',width: '100%' }} disabled label = "Location Url" defaultValue={character.location.url}  variant="outlined">{character.location.url}</TextField>
          <TextField style={{ marginBottom: '8px',width: '100%' }} disabled label = "Origin Name" defaultValue={character.origin.name}  variant="outlined">{character.origin.name}</TextField>
          <TextField style={{ marginBottom: '8px',width: '100%' }} disabled label = "Origin Url" defaultValue={character.origin.url}  variant="outlined">{character.origin.url}</TextField>
          
           <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            style={{ marginBottom: '8px',width: '100%' }}
            noValidate
            autoComplete="off"
          >
              <TextField
                style={{ width: '100%', margin: 'auto' }}
                id="outlined-multiline-static"
                label="Episodes"
                multiline
                disabled
                rows={10}
                defaultValue={character.episode.join('\n')}
              />
          </Box>

          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            style={{ marginBottom: '8px',width: '100%' }}
            noValidate
            autoComplete="off"
          >
              <TextField
                style={{ width: '100%', margin: 'auto' }}
                id="outlined-multiline-static"
                label="Best Sentences"
                multiline
                disabled={!isEditingSentences}
                defaultValue={character.bestSentences.join('\n')}
                onChange={(e) => handleSentences(e.target.value)}
              />
          </Box>
          <Button 
              style={{width: '100%' }} 
              variant="contained" 
              onClick={ handleEdit }
          >
              {isEditingSentences ? 'Save' : 'Edit Sentences'}
          </Button>
          <Button 
              style={{marginTop:'8px', width: '100%' }} 
              variant="contained" 
              onClick={ () => navigate(-1) }
          >
              Volver
          </Button>
        </CardContent>
     
    </Card>
     

  );
}

export default CharacterComponent;
