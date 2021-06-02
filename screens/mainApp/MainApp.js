import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import auth from '@react-native-firebase/auth';

import HomeStackNavigator from '../../navigations/HomeNavigator';
import { setUserAction } from '../../actions/AppAction';

const MainApp = () => {
  const dispatch = useDispatch();
  const isLoggedInState = useSelector((state) => { return state.auth.isUserLoggedIn });

  useEffect(() => {
    isTheUserAuthenticated();
  }, []);

  function isTheUserAuthenticated () {
    let user = auth().currentUser;
    if (user) {
     dispatch(setUserAction({user: user}));
    } else {
      dispatch(setUserAction({user: {}}));
    }
  };

  return (
    <HomeStackNavigator />
  );
};


export default MainApp;
