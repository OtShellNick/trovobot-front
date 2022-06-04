import React from 'react';

import './Header.scss';
import {logout} from '@actions/auth';
import {useSelector} from 'react-redux';
import * as CookieHelper from '@helpers/cookie';
import {useNavigate} from 'react-router-dom';

const Header = () => {
  const {user} = useSelector((state) => state.user);
  const navigate = useNavigate();
  // TODO add types for state
  return <div><a href={`https://open.trovo.live/page/login.html?client_id=${CLIENT_ID}
&response_type=code
&scope=channel_details_self+channel_update_self+user_details_self
+channel_subscriptions+chat_send_self+send_to_my_channel+manage_messages
&redirect_uri=http://192.168.31.37:8088/
&state=myntgbdrfsed`}>Войти</a>
  <button onClick={() => {
    logout(user.access_token).then(() => {
      CookieHelper.del('authorization');
      navigate('/login');
    });
  }}>Выйти
  </button>
  </div>;
};

export default Header;
