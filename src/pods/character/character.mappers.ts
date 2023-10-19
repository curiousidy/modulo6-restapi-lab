import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapFromApiToVm = (
    character: apiModel.Characters
  ):viewModel.CharacterEntityVm => ({
    id: character.id,
    bestSentences: character.bestSentences,
    name: character.name,
    image: character.image,
    gender:character.gender,
    species: character.species,
    status: character.status,
    origin: character.origin,
    type: character.type,
    created: character.created,
    episode: character.episode,
    location: character.location,
    url: character.url
  })