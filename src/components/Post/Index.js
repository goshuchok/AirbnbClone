import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';

const Post = props => {
  return (
    <View style={styles.container}>
      {/* Image*/}
      <Image
        style={styles.image}
        source={{
          uri: 'https://town-n-country-living.com/wp-content/uploads/2019/01/contemporary-living-room.jpg',
        }}
      />

      {/* Bed & Bedroom*/}
      <Text style={styles.bedroom}>1 bed 1 bedrooms</Text>

      {/* Type & Description*/}
      <Text style={styles.description} numberOfLines={2}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
        beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        veritatis corrupti iure rem sapiente.
      </Text>

      {/* Old price & new price*/}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$36 </Text>
        <Text style={styles.price}> $30 </Text>
        /night
      </Text>

      {/* Total price*/}
      <Text style={styles.totalPrice}>$230 total</Text>
    </View>
  );
};

export default Post;
