import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CharacterCollectionEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';
import { useNavigate } from 'react-router-dom';
import { linkRoutes, switchRoutes } from 'core/router';

interface Props {
  character: CharacterCollectionEntityVm;
 
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character} = props;
  const navigate = useNavigate();
  return (
    
    <Card onClick={() =>  navigate(linkRoutes.character(character.id))}>
      <CardHeader
        title={character.name}
        subheader={character.gender}
      />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
          <Typography variant="subtitle1" gutterBottom>
            {character.species}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};
