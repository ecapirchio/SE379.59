/*
import { useFetch } from '../useFetch';

export const useFetchSport = (sportId) => {
  const sportType = sportId.split('-')[0];
  return useFetch(`/${sportType}/${sportId}`);
};
*/

import { useFetch } from '../useFetch';

export const useFetchSport = (sportType) => {
  return useFetch(`/${sportType}`);
};
