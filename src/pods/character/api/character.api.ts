import { Hotel } from './character.api-model';
import { Lookup } from 'common/models';
import { mockCities, mockHotelCollection } from './character.mock-data';

export const getHotel = async (id: string): Promise<Hotel> => {
  return mockHotelCollection.find((h) => h.id === id);
};

export const getCities = async (): Promise<Lookup[]> => {
  return mockCities;
};

export const saveHotel = async (hotel: Hotel): Promise<boolean> => {
  return true;
};
