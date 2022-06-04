import React, {useEffect} from 'react';
import {Outlet, useLocation, useNavigate} from 'react-router-dom';
import * as CookieHelper from '@helpers/cookie';

import Header from '@components/Layout/Header/Header';

import './Layout.scss';
import {login} from '@actions/auth';
import {useDispatch} from 'react-redux';
import {loginUser} from '@store/userStore/userStore';
import {getSelf} from '@actions/user';

const Layout = () => {
  // TODO add hook for auth && get self
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search).get('code');

  useEffect(() => {
    if (searchParams) {
      login(searchParams).then((user) => {
        dispatch(loginUser(user));
        CookieHelper.set('authorization', user.access_token);
        navigate('/');
      });
    };
  }, [searchParams]);

  useEffect(() => {
    getSelf().then((user) => {
      dispatch(loginUser(user));
      CookieHelper.set('authorization', user.access_token);
    });
  }, []);

  return <div><Header/><Outlet/></div>;
};

export default Layout;
