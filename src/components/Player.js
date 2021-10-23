import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { deletePlayer } from '../api/data/playerData';

const PlayerCard = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  justify-content: center;
  align-items: center;

  background-color: white;
  padding: 10px;
  border: 1px solid black;
  border-radius: 4px;
  margin: 10px;
`;

const PlayerPhoto = styled.img`
  max-height: 150px;
  max-width: 200px;

  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  column-gap: 5px;
`;

const EditButton = styled.button``;

const DeleteButton = styled.button``;

export default function Player({
  user,
  setPlayersState,
  playerData,
  setEditObj,
}) {
  const history = useHistory();

  const handleEdit = () => {
    setEditObj(playerData);
    history.push('/new');
  };

  const handleDelete = () => {
    deletePlayer(user.uid, playerData.firebaseKey).then(setPlayersState);
  };

  return (
    <PlayerCard>
      <h5>{playerData.name}</h5>
      <PlayerPhoto src={playerData.img} alt="player_photo" />
      {playerData.position}
      <ButtonContainer>
        <EditButton
          type="button"
          className="btn btn-primary"
          onClick={handleEdit}
        >
          Edit
        </EditButton>
        <DeleteButton
          type="button"
          className="btn btn-danger"
          onClick={handleDelete}
        >
          Delete
        </DeleteButton>
      </ButtonContainer>
    </PlayerCard>
  );
}

Player.propTypes = {
  user: PropTypes.shape().isRequired,
  setPlayersState: PropTypes.func.isRequired,
  playerData: PropTypes.shape({
    name: PropTypes.string,
    position: PropTypes.string,
    img: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  setEditObj: PropTypes.func.isRequired,
};
