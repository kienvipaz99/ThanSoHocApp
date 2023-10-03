import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextInputState,
  TextStyle,
} from 'react-native';
import React from 'react';
import sizes from '../../res/sizes';
import {colors} from '../../res/colors';
import {fonts} from '../../res/fonts';

export default function TextInPut({
  keyboardType,
  style,
  maxLength,
  text,
  onChangText,
  inputRef,
  options,
}: {
  keyboardType?: KeyboardTypeOptions;
  style?: StyleProp<TextStyle>;
  maxLength?: number;
  text?: string;
  onChangText?: (val: string) => void;
  inputRef?: any;
  options?: TextInputProps;
}) {
  return (
    <TextInput
      ref={inputRef}
      style={[styles.txtInput, style]}
      keyboardType={keyboardType}
      maxLength={maxLength}
      value={text}
      blurOnSubmit={false}
      returnKeyType="next"
      onChangeText={onChangText}
      {...options}
    />
  );
}

const styles = StyleSheet.create({
  txtInput: {
    width: sizes.width * 0.55,
    borderColor: colors.background,
    borderBottomWidth: 1,
    height: 50,
    fontFamily: fonts.regular,
    fontSize: 20,
    color: colors.background,
  },
});
