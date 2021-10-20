import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { createPlayer } from '../../api/data/playerData';

const initialFormState = {
  name: '',
  position: '',
};

const NameInput = styled.input``;

export default function New({ user }) {
  const [formState, setFormState] = useState(initialFormState);
  useEffect(() => {}, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    createPlayer({ ...formState, uid: user.uid });
  };

  const handleChange = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <h1>Add a Player</h1>
      <form>
        <NameInput
          name="name"
          id="name"
          value={formState.name}
          onChange={handleChange}
          required
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}

New.propTypes = {
  user: PropTypes.shape().isRequired,
};
