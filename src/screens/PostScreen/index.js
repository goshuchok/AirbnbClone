/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import DetailPost from '../../components/DetailPost';
import {useRoute} from '@react-navigation/native';

import places from '../../../assets/data/feed';

const PostScreen = () => {
  const route = useRoute();

  const post = places.find(place => place.id === route.params.postId);

  return (
    <View style={{backgroundColor: 'white'}}>
      <DetailPost post={post} />
    </View>
  );
};

export default PostScreen;
