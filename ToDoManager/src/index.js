import 'react-native-gesture-handler';
import React from 'react';
import { initializeFirebaseApi } from './services/FirebaseApi';

import App from './App';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Setting a timer']);

const Index = () => {
  initializeFirebaseApi();
  return <App />;
};

export default Index;
