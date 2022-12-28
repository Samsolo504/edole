import React from 'react';
import {useSelector} from 'react-redux';
import RootNavigator from './RootNavigator';
import OnBoarding from './OnBoarding';
import Authentication from './Authentication';
import {User} from '../redux/store/slices/userSlice';

const NavigationFlow = (): JSX.Element => {
  const user: User = useSelector((state: any) => state.user);
  const isLogged = user.connected;
  // const isLogged = false;
  const hasAlreadySeenOnBoarding = user.mustSeeOnBoarding;
  if (hasAlreadySeenOnBoarding) {
    if (isLogged) {
      return <RootNavigator />;
    }
    return <Authentication />;
  }

  return <OnBoarding />;
};

export default NavigationFlow;
