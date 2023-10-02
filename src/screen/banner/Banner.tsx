import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Linking,
} from 'react-native';
import {useGetBannerQuery} from '../../redux/api/auth.api';
import sizes from '../../res/sizes';

export default function Banner() {
  const {data} = useGetBannerQuery('');
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<any>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      // Tính index tiếp theo
      //@ts-ignore
      const nextIndex = (currentIndex + 1) % data?.data?.length;

      flatListRef.current?.scrollToIndex({animated: true, index: nextIndex});
      setCurrentIndex(nextIndex);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [currentIndex, data?.data?.length]);

  const renderItem = ({item}: {item: Banner}) => {
    return (
      <Pressable
        style={{
          height: sizes.width * 0.4,
          width: sizes.width,
          alignItems: 'center',
        }}
        onPress={() => {
          Linking.openURL(item?.link).catch(err => console.error('Lỗi:', err));
        }}>
        <Image
          source={{uri: item?.image}}
          style={{height: sizes.width * 0.5, width: sizes.width * 0.9}}
        />
      </Pressable>
    );
  };

  return (
    <FlatList
      ref={flatListRef}
      data={data?.data}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
        useNativeDriver: false,
      })}
      decelerationRate={'normal'}
      scrollEventThrottle={16}
      pagingEnabled
      style={{marginTop: 50}}
    />
  );
}

const styles = StyleSheet.create({});
