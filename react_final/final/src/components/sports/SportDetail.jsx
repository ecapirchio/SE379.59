import { useNavigate, useParams } from 'react-router-dom';
import { useFetchSport } from '../../hooks/sports/useFetchSport';
import { Spinner } from '../Spinner';
import { Card } from '../Card';

export const SportDetail = () => {
  const navigate = useNavigate();
  const { sportId } = useParams();
  const { data: sport, loading, error } = useFetchSport(sportId);

  const handleGoBackClick = () => {
    navigate(`/${sportId.split('-')[0]}`);
  };

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p>There was an error</p>;
  }

  return (
    <Card>
      <div className="sport-detail-container">
        {sport && (
          <>
            <img
              style={{ flex: 1 }}
              width={250}
              alt={sport.team}
              src={sport.logo}
            />
            <div className="sport-details">
              <strong>{sport.team}</strong>
              <p>{sport.division}</p>
              <p>Standing: {sport.standing}</p>
            </div>
          </>
        )}
      </div>
      <button
        style={{ alignItems: 'flex-end', marginTop: '15px' }}
        onClick={handleGoBackClick}
      >
        Go back
      </button>
    </Card>
  );
};
