import React from 'react';
import PropTypes from 'prop-types';
import { signInUser } from '../../api/auth';

export default function SignIn({ user }) {
  return (
    <>
      {user === null ? (
        <p className="text-white">Loading...</p>
      ) : (
        <div className="text-center mt-5">
          <h1>Welcome! Sign In!</h1>
          <button
            type="button"
            className="btn btn-success"
            onClick={signInUser}
          >
            Sign In
          </button>
        </div>
      )}
    </>
  );
}

SignIn.propTypes = {
  user: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
};

SignIn.defaultProps = {
  user: null,
};
