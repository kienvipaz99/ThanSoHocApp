import {StyleSheet} from 'react-native';
import {colors} from './colors';
import {fonts} from './fonts';
import sizes from './sizes';

export default stylesCustom = StyleSheet.create({
  conatainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shadowitem: {
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  viewImg: {
    justifyContent: 'center',
    flex: 1,
  },
  txt: {color: colors.white, fontFamily: fonts.bold, fontSize: 20},
  view: {
    flex: 1,
    position: 'absolute',
    width: sizes.width,
    height: sizes.height,
  },
  txt1: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: 18,
    marginLeft: 15,
  },
  txt2: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: 18,
  },
});
