import {configureStore} from '@reduxjs/toolkit';
import userReduser from '@store/userStore/userStore';

const store = configureStore({
  reducer: {
    user: userReduser,
  },
});

export default store;
