import { useFetch } from '../useFetch';

export const useFetchSport = (sportType) => {
  return useFetch(`/${sportType}`);
};
