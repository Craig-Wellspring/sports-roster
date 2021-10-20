import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Home from '../components/views/Home';
import Team from '../components/views/Team';
import New from '../components/views/New';

const ViewContainer = styled.div`
  background-color: gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export default function Router({ user, playersState, setPlayersState }) {
  return (
    <ViewContainer>
      <Switch>
        <Route exact path="/" component={() => <Home user={user} />} />
        <Route
          exact
          path="/team"
          component={() => <Team user={user} playersState={playersState} />}
        />
        <Route
          exact
          path="/new"
          component={() => (
            <New user={user} setPlayersState={setPlayersState} />
          )}
        />
      </Switch>
    </ViewContainer>
  );
}

Router.propTypes = {
  user: PropTypes.shape().isRequired,
  playersState: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPlayersState: PropTypes.func.isRequired,
};
