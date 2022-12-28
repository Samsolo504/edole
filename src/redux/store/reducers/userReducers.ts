import {User} from '../slices/userSlice';


export const setSeeingOnBoarding = (
  state: User,
  action: {
    type: string;
    payload: boolean
  },
): void => {
  state.mustSeeOnBoarding = action.payload;
};

export const setFollowingTutorial = (
  state: User,
  action: {
    type: string;
    payload: boolean
  },
): void => {
  state.mustFollowTheTutorial = action.payload;
};


export const Login = (
  state: User,
  action: {
    type: string | "LOGIN" | "LOGOUT";
    payload: string;
  }
): any => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state, //copy all previous states
        authToken: action.payload,
      };
    case 'LOGOUT':
      return {
        authToken: null,
      };
    default:
      return state;
  }
}
