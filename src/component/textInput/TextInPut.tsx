import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
} from 'react-native';
import React from 'react';
import sizes from '../../res/sizes';
import {colors} from '../../res/colors';
import {fonts} from '../../res/fonts';

export default function TextInPut({
  keyboardType,
  style,
}: {
  keyboardType?: KeyboardTypeOptions;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <TextInput style={[styles.txtInput, style]} keyboardType={keyboardType} />
  );
}

const styles = StyleSheet.create({
  txtInput: {
    width: sizes.width * 0.55,
    borderColor: colors.white,
    borderBottomWidth: 1,
    height: 50,
    fontFamily: fonts.regular,
    fontSize: 20,
    color: colors.white,
  },
});
