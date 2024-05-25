/*
import React from 'react';

export const Baseball = () => {
  return (
    <div>
      <h1>Baseball Page</h1>
      <p>This is the baseball page content.</p>
    </div>
  );
};
*/
import React from 'react';
import { useFetchSport } from '../hooks//sports/useFetchSport';
import '../App.css';

export const Baseball = () => {
  const { data: teams, loading, error } = useFetchSport('baseball');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching baseball data: {error.message}</div>;

  return (
    <div>
      <h1>Baseball Teams</h1>
      <div className="teams">
        {teams && teams.map(team => (
          <div key={team.id} className="team">
            <img src={team.logo} alt={`${team.team} logo`} />
            <h2>{team.team}</h2>
            <p>Division: {team.division}</p>
            <p>Standing: {team.standing}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
