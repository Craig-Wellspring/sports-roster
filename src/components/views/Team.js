import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Player from '../Player';

const PlayerCardContainer = styled.div`
  padding: 10px;
  border: 1px solid black;
  border-radius: 4px;
  margin: 10px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function Team({
  user,
  setPlayersState,
  playersState,
  setEditObj,
}) {
  return (
    <>
      <h1>Team Roster</h1>
      <PlayerCardContainer>
        {playersState.map((player) => (
          <Player
            key={player.firebaseKey}
            user={user}
            setPlayersState={setPlayersState}
            playerData={player}
            setEditObj={setEditObj}
          />
        ))}
      </PlayerCardContainer>
    </>
  );
}

Team.propTypes = {
  user: PropTypes.shape().isRequired,
  setPlayersState: PropTypes.func.isRequired,
  playersState: PropTypes.arrayOf(PropTypes.object).isRequired,
  setEditObj: PropTypes.func.isRequired,
};
