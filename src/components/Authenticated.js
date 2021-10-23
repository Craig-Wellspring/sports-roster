import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Navigation from './Navigation';
import Router from '../routes';
import { getPlayers } from '../api/data/playerData';

export default function Authenticated({ user }) {
  const [playersState, setPlayersState] = useState([]);
  useEffect(() => {
    getPlayers(user.uid).then(setPlayersState);
  }, []);

  const [editObj, setEditObj] = useState({});

  return (
    <>
      <Navigation user={user} />
      <Router
        user={user}
        playersState={playersState}
        setPlayersState={setPlayersState}
        editObj={editObj}
        setEditObj={setEditObj}
      />
    </>
  );
}

Authenticated.propTypes = {
  user: PropTypes.shape({
    fullName: PropTypes.string,
    profileImage: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
};
