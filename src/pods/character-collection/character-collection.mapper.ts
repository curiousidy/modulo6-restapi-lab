import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

// export const mapFromApiToVm = (
//   character: apiModel.CharacterEntityApi
// ): viewModel.CharacterCollectionEntityVm[] => {
//   return character.results.map(result => ({
//     id: result.id.toString(),
//     image: result.image,
//     name: result.name,
//     status: result.status,
//     species: result.species,
//     gender: result.gender,
//   }));
// };

export const mapFromApiToVm = (
  character: apiModel.Result
):viewModel.CharacterCollectionEntityVm => ({
  id: character.id.toString(),
  image: character.image,
  name: character.name,
  status: character.status,
  species: character.species,
  gender: character.gender,
})
