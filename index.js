// import library to create component
import React from 'react';
import  { AppRegistry, View } from 'react-native';
import   Header  from './src/components/header';
import AlbumList from './src/components/AlbumList';





// Create Component
const App = () => (
    <View style={{ flex:1 }}>
    <Header headerText={'Squaaad Goals'} />
    <AlbumList />
    </View>
);
  


//render it to the device
AppRegistry.registerComponent('Album', () => App);



