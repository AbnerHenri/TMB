import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import MainStack from './Src/Navigators/MainStack';
import AuthProvider from './Src/Contexts/Auth';


const App = () => {
  
  return (
      <NavigationContainer>
        <AuthProvider>
          <SafeAreaView style={Styles.Page}>
            <StatusBar hidden={true} />

            <MainStack />
          </SafeAreaView>
        </AuthProvider>
      </NavigationContainer>   
  );
};

const Styles = StyleSheet.create({
  Page : {
    flex : 1,
  }
});

export default App;
