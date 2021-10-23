import React from 'react';
import { useHistory } from 'react-router-dom';
import { signOutUser } from '../api/auth';

export default function Navigation() {
  const history = useHistory();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        type="button"
        className="btn btn-info"
        onClick={() => history.push('/')}
      >
        Home
      </button>
      <button
        type="button"
        className="btn btn-info"
        onClick={() => history.push('/team')}
      >
        Team
      </button>
      <button
        type="button"
        className="btn btn-info"
        onClick={() => history.push('/new')}
      >
        New
      </button>
      <button type="button" className="btn btn-danger" onClick={signOutUser}>
        Sign Out
      </button>
    </nav>
  );
}
