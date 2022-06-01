import React, {lazy} from 'react';
import {Route, Routes} from 'react-router-dom';

import Layout from '@components/Layout/Layout';

import './App.scss';

const Login = lazy(() => import('@components/Login/Login'));
const Dashboard = lazy(() => import('@components/Dashboard/Dashboard'));
const NotFound = lazy(() => import('@components/NotFound/NotFound'));

const App = () => <Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Dashboard />} />
  </Route>
  <Route path="/login" element={<Login />} />
  <Route path="*" element={<NotFound />} />
</Routes>;

export default App;
