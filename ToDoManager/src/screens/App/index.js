import React, { useEffect } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import { CommonActions } from '@react-navigation/native';
import { currentFirebaseUser } from '../../services/FirebaseApi';

import laoding from '../../assets/animations/loading.json';

const App = ({ navigation }) => {
  useEffect(() => {
    let resetNavigation = CommonActions.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });

    const verifyUser = async () => {
      try {
        const user = await currentFirebaseUser();
        if (user) {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'TaskList' }],
            }),
          );
          return;
        }
        navigation.dispatch(resetNavigation);
      } catch (error) {
        navigation.dispatch(resetNavigation);
      }
    };

    verifyUser();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <LottieView
        source={laoding}
        autoPlay
        loop
        style={{
          height: 100,
          width: 100,
        }}
      />
    </View>
  );
};

export default App;
