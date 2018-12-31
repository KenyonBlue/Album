// import library to create component
import React from 'react';
import  { AppRegistry } from 'react-native';
import   Header  from './src/components/header';





// Create Component
const App = () => (
    <Header />
);
  


//render it to the device
AppRegistry.registerComponent('Album', () => App);

