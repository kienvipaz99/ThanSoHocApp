import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationProp} from '@react-navigation/native';
import images from '../../res/images';
import stylesCustom from '../../res/stylesCustom';
import sizes from '../../res/sizes';
import Icon from 'react-native-vector-icons/AntDesign';
import {colors} from '../../res/colors';
import IconRight from '../../component/icons/IconRight';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default function Setting({
  navigation,
}: {
  navigation: NavigationProp<Record<string, any>>;
}) {
  return (
    <View style={stylesCustom.conatainer}>
      <View style={stylesCustom.viewImg}>
        <Image source={images.background} />
      </View>
      <View style={stylesCustom.view}>
        <View style={styles.view}>
          <Text style={[stylesCustom.txt, {alignSelf: 'center'}]}>CÀI ĐẶT</Text>
          <Icon
            name="caretleft"
            color={colors.white}
            size={30}
            style={styles.icons}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={styles.view1}>
          <Pressable
            style={styles.btn}
            onPress={() => navigation.navigate('Numerology')}>
            <View style={stylesCustom.row}>
              <FontAwesome name="grav" color={colors.white} size={30} />
              <Text style={stylesCustom.txt1}>Thần số học là gì?</Text>
            </View>
            <IconRight />
          </Pressable>
          <Pressable
            style={styles.btn}
            onPress={() => navigation.navigate('Information')}>
            <View style={stylesCustom.row}>
              <FontAwesome
                name="user-circle-o"
                color={colors.white}
                size={30}
              />
              <Text style={stylesCustom.txt1}>Thông tin cá nhân</Text>
            </View>
            <IconRight />
          </Pressable>
          <Pressable style={styles.btn}>
            <View style={stylesCustom.row}>
              <FontAwesome name="th-large" color={colors.white} size={30} />
              <Text style={stylesCustom.txt1}>Ứng dụng của chúng tôi</Text>
            </View>
            <IconRight onPress={() => {}} />
          </Pressable>
        </View>
        <View style={[styles.view1, styles.view2]}>
          <View style={styles.view3}>
            <FontAwesome name="comments" color={colors.white} size={25} />
            <Text style={stylesCustom.txt2}>Góp ý </Text>
          </View>
          <View style={styles.view3}>
            <FontAwesome name="star" color={colors.white} size={25} />
            <Text style={stylesCustom.txt2}>Đánh giá</Text>
          </View>
          <View style={styles.view3}>
            <FontAwesome name="share-square" color={colors.white} size={25} />
            <Text style={stylesCustom.txt2}>Chia sẻ</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    marginTop: sizes.height * 0.09,
    alignSelf: 'center',
    width: sizes.width,
  },
  icons: {
    position: 'absolute',
    alignSelf: 'flex-end',
    left: 10,
  },
  view1: {
    width: sizes.width * 0.9,
    alignSelf: 'center',
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: 'white',
    marginTop: 50,
    padding: 10,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  view2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  view3: {
    alignItems: 'center',
  },
});
