/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect, useRef} from 'react';
import {View, FlatList, useWindowDimensions} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from '../../components/PostCarouselItem';

import places from '../../../assets/data/feed';

const SearchResultsMap = () => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);

  const flatlist = useRef();

  const width = useWindowDimensions().width;

  useEffect(() => {
    if (!selectedPlaceId || !flatlist) {
      return;
    }
    const index = places.findIndex(place => place.id === selectedPlaceId);
    flatlist.current.scrollToIndex({index});
  }, [selectedPlaceId]);

  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        style={{width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}>
        {places.map(place => (
          <CustomMarker
            coordinate={place.coordinate}
            price={place.newPrice}
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
          />
        ))}
      </MapView>
      <View style={{position: 'absolute', bottom: 30}}>
        <FlatList
          ref={flatlist}
          ItemSeparatorComponent={() => <View style={{width: 16}} />}
          data={places}
          renderItem={({item}) => <PostCarouselItem post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
        />
      </View>
    </View>
  );
};

export default SearchResultsMap;
