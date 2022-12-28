import {Dimensions} from 'react-native';

export const timeOut = (navigation: any, destination: string): void => {
  setTimeout(() => navigation.navigate(destination), 5000);
};

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

export {screenWidth, screenHeight};
