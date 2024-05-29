import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const TeamDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const team = location.state?.team;

  if (!team) {
    return <div>No team data available</div>;
  }

  return (
    <div className="team-detail">
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>{team.team}</h1>
      <img src={team.logo} alt={`${team.team} logo`} />
      <p>Division: {team.division}</p>
      <p>Standing: {team.standing}</p>
    </div>
  );
};
