import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {colors} from '../../res/colors';

export default function IconRight({onPress}: {onPress?: () => void}) {
  return <Icon name="right" color={colors.white} size={25} onPress={onPress} />;
}

const styles = StyleSheet.create({});
