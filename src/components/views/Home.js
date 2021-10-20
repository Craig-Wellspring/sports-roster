import React from 'react';
import PropTypes from 'prop-types';

export default function Home({ user }) {
  return (
    <>
      <h1>Welcome, {user.fullName}!</h1>
    </>
  );
}

Home.propTypes = {
  user: PropTypes.shape({
    fullName: PropTypes.string,
    profileImage: PropTypes.string,
  }).isRequired,
};
