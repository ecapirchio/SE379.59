import { useFetch } from '../useFetch';

export const useFetchSports = (sportType) => {
  return useFetch(`/${sportType}`);
};
