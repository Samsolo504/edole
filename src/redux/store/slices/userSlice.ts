import {createSlice} from '@reduxjs/toolkit';
import {
  Login,
  setFollowingTutorial,
  setSeeingOnBoarding,
} from '../reducers/userReducers';

export type UserInfos = {
  user_id?: string | number;
  username?: string;
  email?: string;
  firstname?: string;
  lastname?: string;
  avatar_url?: string;
  assurance_number?: number;
  created_account_date?: Date;
  last_connexion?: Date;
  curriculum_vitae?: string;
  authToken: any;
};

type RegisteredUserInfos = {
  authToken: any;
  user_id: string | number;
  username: string;
  email: string;
  firstname: string;
  lastname: string;
};

export type User = {
  token: string;
  mustFollowTheTutorial: boolean;
  mustSeeOnBoarding: boolean;
  user_infos: UserInfos | RegisteredUserInfos;
  connected: boolean;
};
const initialState: User = {
  token: '',
  mustSeeOnBoarding: true,
  mustFollowTheTutorial: true,
  connected: false,
  user_infos: {
    authToken: null,
  },
};
const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUserInfos: (): void => {},
    setUserConnexion: (): void => {},
    setAuth: (): void => {},
    setFollowingTutorial: setFollowingTutorial,
    setSeeingOnBoarding: setSeeingOnBoarding,
    login: Login,
  },
});

export default userSlice;
