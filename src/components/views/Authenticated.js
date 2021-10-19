import React from 'react';
import PropTypes from 'prop-types';
import { signOutUser } from '../../api/auth';

export default function Authenticated({ user }) {
  return (
    <div className="text-center mt-5">
      <h1>Welcome, {user.fullName}!</h1>
      <img src={user.profileImage} alt={user.fullName} />
      <div className="mt-2">
        <button type="button" className="btn btn-danger" onClick={signOutUser}>
          Sign Out
        </button>
      </div>
    </div>
  );
}

// NOTE: The propTypes are set agains the component and the term is camelCased
Authenticated.propTypes = {
  user: PropTypes.shape({
    fullName: PropTypes.string,
    profileImage: PropTypes.string,
  }).isRequired,
};
