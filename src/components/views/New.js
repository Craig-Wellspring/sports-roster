import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { createPlayer, updatePlayer } from '../../api/data/playerData';

const FormContainer = styled.div`
  padding: 10px;
  margin: 10px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  justify-content: center;
  align-items: center;
`;

const NameLabel = styled.label`
  font-size: 1.2em;
  font-weight: bold;
`;

const NameInput = styled.input`
  padding: 10px;
  border-radius: 4px;

  text-align: center;
`;

const PositionLabel = styled.label`
  font-size: 1.2em;
  font-weight: bold;
`;

const PositionDropdown = styled.select`
  padding: 10px;
  border: 1px solid black;
  border-radius: 4px;

  text-align: center;
`;

const PhotoLabel = styled.label`
  font-size: 1.2em;
  font-weight: bold;
`;

const PhotoInput = styled.input`
  padding: 10px;
  border-radius: 4px;

  text-align: center;
`;

const SubmitButton = styled.button``;

const initialFormState = {
  name: '',
  position: 'Forward',
  img: '',
};

export default function New({
  user, setPlayersState, editObj, setEditObj,
}) {
  const [formState, setFormState] = useState(initialFormState);

  useEffect(() => {
    let isMounted = true;
    if (editObj.firebaseKey) {
      if (isMounted) {
        setFormState({
          name: editObj.name,
          position: editObj.position,
          img: editObj.img,
        });
      } else {
        isMounted = false;
      }
    }
    return () => {
      isMounted = true;
    };
  }, [editObj]);

  const resetForm = () => {
    setFormState({ ...initialFormState });
    setEditObj({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editObj.firebaseKey) {
      updatePlayer(user.uid, editObj.firebaseKey, formState).then((players) => {
        setPlayersState(players);
        resetForm();
      });
    } else {
      createPlayer({ ...formState, uid: user.uid }).then(setPlayersState);
    }
    resetForm();
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
      <FormContainer>
        <StyledForm>
          <NameLabel htmlFor="name">
            Name:
            <br />
            <NameInput
              name="name"
              id="name"
              value={formState.name}
              onChange={handleChange}
              required
            />
          </NameLabel>
          <PositionLabel htmlFor="position">
            Position:
            <br />
            <PositionDropdown
              name="position"
              id="position"
              value={formState.position}
              onChange={handleChange}
              required
            >
              <option>Forward</option>
              <option>Midfielder</option>
              <option>Defender</option>
              <option>Goalkeeper</option>
            </PositionDropdown>
          </PositionLabel>
          <PhotoLabel>
            Photo URL:
            <br />
            <PhotoInput
              name="img"
              id="img"
              type="url"
              value={formState.img}
              onChange={handleChange}
              required
            />
          </PhotoLabel>
          <SubmitButton
            type="submit"
            // className="btn btn-success"
            className={`btn btn-${editObj.firebaseKey ? 'primary' : 'success'}`}
            onClick={handleSubmit}
          >
            {/* Submit */}
            {editObj.firebaseKey ? 'Update' : 'Submit'}
          </SubmitButton>
        </StyledForm>
      </FormContainer>
    </>
  );
}

New.propTypes = {
  user: PropTypes.shape().isRequired,
  setPlayersState: PropTypes.func.isRequired,
  editObj: PropTypes.shape().isRequired,
  setEditObj: PropTypes.func.isRequired,
};
