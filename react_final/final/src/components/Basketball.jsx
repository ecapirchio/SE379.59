import React from 'react';
import { useFetchSport } from '../hooks//sports/useFetchSport';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export const Basketball = () => {
  const { data: teams, loading, error } = useFetchSport('basketball');
  const navigate = useNavigate();

  const handleTeamClick = (team) => {
    navigate(`/team/${team.id}`, { state: { team } });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching basketball data: {error.message}</div>;

  return (
    <div>
      <h1>Basketball Teams</h1>
      <div className="teams">
        {teams && teams.map(team => (
          <div key={team.id} className="team" onClick={() => handleTeamClick(team)}>
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
