/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, useWindowDimensions} from 'react-native';
import styles from './style';

const PostCarouselItem = props => {
  const post = props.post;
  const width = useWindowDimensions().width;
  return (
    <View style={(styles.container, {width: width - 60})}>
      <View style={styles.innerContainer}>
        {/* Image*/}
        <Image
          style={styles.image}
          source={{
            uri: post.image,
          }}
        />
        <View style={{flex: 1, marginHorizontal: 10}}>
          {/* Bed & Bedroom*/}
          <Text style={styles.bedroom}>
            {post.bed} bed {post.bedroom} bedrooms
          </Text>

          {/* Type & Description*/}
          <Text style={styles.description} numberOfLines={2}>
            {post.type}. {post.title}
          </Text>

          {/* Old price & new price*/}
          <Text style={styles.prices}>
            <Text style={styles.oldPrice}>${post.oldPrice} </Text>
            <Text style={styles.price}> ${post.newPrice}</Text>
            /night
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PostCarouselItem;
