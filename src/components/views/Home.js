import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HomeImage = styled.img`
  max-width: 500px;
`;

export default function Home({ user }) {
  return (
    <>
      <h1>Welcome, {user.fullName}!</h1>
      <HomeImage
        src="https://www.wallpapertip.com/wmimgs/228-2285371_usa-soccer-wallpaper.jpg"
        alt="Team Logo"
      />
    </>
  );
}

Home.propTypes = {
  user: PropTypes.shape({
    fullName: PropTypes.string,
    profileImage: PropTypes.string,
  }).isRequired,
};
