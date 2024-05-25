import { useFetchSports } from '../../hooks/sports/useFetchSport.js';
import { Spinner } from '../Spinner.jsx';
import { SportListRow } from './SportListRow.tsx';

export const SportList = ({ sportType }) => {
  const { data: sports, loading, error } = useFetchSports(sportType);

  if (loading) return <Spinner />;

  if (error) {
    return <p>There was an error</p>;
  }

  return (
    <div className="sport-container">
      {sports.length > 0 &&
        sports.map((sport) => {
          return <SportListRow key={sport.id} sport={sport} />;
        })}
    </div>
  );
};
