import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {NavigationProp} from '@react-navigation/native';
import {fonts} from '../../res/fonts';
import images from '../../res/images';
import {colors} from '../../res/colors';
import sizes from '../../res/sizes';

export default function SlapScreen1({
  navigation,
}: {
  navigation: NavigationProp<Record<string, any>>;
}) {
  const timerRef = useRef<any>(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      navigation.navigate('Information');
    }, 3000);
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  });
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle={'light-content'}
      />

      <Image source={images.tshpng} style={styles.img} />
      <Text style={styles.txt}>THẦN SỐ HỌC</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#023691',
  },
  txt: {
    fontFamily: fonts.sonsieOne,
    fontSize: 35,
    color: colors.white,
    marginTop: sizes.height * 0.06,
  },
  img: {
    marginTop: sizes.height * 0.18,
    height: sizes.width * 0.7,
    width: sizes.width * 0.7,
    borderRadius: (sizes.width * 0.7) / 2,
  },
});
