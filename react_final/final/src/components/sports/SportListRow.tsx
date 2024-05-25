import React from 'react';
import { Card } from '../Card';
import { Thumbnail } from '../Thumbnail';
import { Link } from 'react-router-dom';

interface Props {
  sport: Sport;
}

export const SportListRow = ({ sport }: Props) => {
  return (
    <Card
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '50%',
        alignItems: 'center',
      }}
    >
      <Thumbnail description={sport.team} image={sport.logo} />
      <Link key={sport.id} to={`${sport.id}`}>
        {sport.team}
      </Link>
    </Card>
  );
};
