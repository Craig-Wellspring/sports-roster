import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import SignIn from '../views/SignIn';
import Authenticated from '../Authenticated';

function Initialize() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((authedUser) => {
      if (authedUser) {
        const userInfoObj = {
          fullName: authedUser.displayName,
          profileImage: authedUser.photoURL,
          uid: authedUser.uid,
          user: authedUser.email.split('@')[0],
        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return user ? <Authenticated user={user} /> : <SignIn user={user} />;
}

export default Initialize;
