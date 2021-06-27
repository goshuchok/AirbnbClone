import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post/Index';
import SearchResultScreen from './src/screens/SearchResults';
import feed from './assets/data/feed';

const post1 = feed[0];

const App: () => Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        {/* <Post post={post1} /> */}
        <SearchResultScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
