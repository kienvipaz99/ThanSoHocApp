import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import stylesCustom from '../../res/stylesCustom';
import images from '../../res/images';
import {colors} from '../../res/colors';
import {fonts} from '../../res/fonts';
import sizes from '../../res/sizes';
import TextInPut from '../../component/textInput/TextInPut';
import ButtomCustomer from '../../component/btn/ButtomCustomer';

export default function Information() {
  return (
    <View style={stylesCustom.conatainer}>
      <View style={styles.viewImg}>
        <Image source={images.background} style={styles.img} />
      </View>
      <View style={styles.view}>
        <Text style={styles.title}>Thông tin cá nhân</Text>
        <View style={styles.view1}>
          <View style={stylesCustom.row}>
            <Text style={styles.txt}>Họ và Tên :</Text>
            <TextInPut />
          </View>
          <View style={stylesCustom.row}>
            <Text style={styles.txt}>Ngày sinh :</Text>
            <View style={styles.view2}>
              <TextInPut keyboardType="numeric" style={styles.txtip} />
              <TextInPut keyboardType="numeric" style={styles.txtip} />
              <TextInPut keyboardType="numeric" style={styles.txtip} />
            </View>
          </View>
        </View>
        <ButtomCustomer title="Tra Cứu" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {},
  viewImg: {
    justifyContent: 'center',
    flex: 1,
  },
  view: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    width: sizes.width,
    height: sizes.height,
  },
  title: {
    color: colors.white,
    fontSize: 30,
    fontFamily: fonts.medium,
    marginTop: sizes.height * 0.1,
  },
  txt: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: 20,
    marginTop: 20,
    paddingRight: 20,
  },
  view1: {width: sizes.width * 0.8, marginTop: sizes.height * 0.08},
  view2: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: sizes.width * 0.55,
  },
  txtip: {width: (sizes.width * 0.5) / 3, textAlign: 'center'},
});
