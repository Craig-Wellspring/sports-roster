import React from 'react';
import PropTypes from 'prop-types';

export default function Team({ playersState }) {
  return (
    <>
      <h1>Team Roster</h1>
      {playersState.map((player) => player)}
    </>
  );
}

Team.propTypes = {
  playersState: PropTypes.arrayOf(PropTypes.object).isRequired,
};
