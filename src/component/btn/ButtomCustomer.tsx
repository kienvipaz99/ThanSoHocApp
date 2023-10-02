import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import sizes from '../../res/sizes';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../res/colors';
import {fonts} from '../../res/fonts';

export default function ButtomCustomer({
  title,
  onPress,
  isLoading,
}: {
  title: string;
  onPress: () => void;
  isLoading?: boolean;
}) {
  return (
    <LinearGradient
      colors={['#D82B50', '#5014B2']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.linearGradient}>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        {isLoading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.txt}>{title}</Text>
        )}
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: sizes.width * 0.8,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 60,
  },
  txt: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 22,
  },
});
