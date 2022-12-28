import {configureStore} from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';

// const rootReducer = combineReducers(userSlice.reducer);
//
// export type RootState = ReturnType<typeof rootReducer>;
export const {login, setSeeingOnBoarding, setFollowingTutorial} =
  userSlice.actions;

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;
