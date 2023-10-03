import {Image, Linking, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationProp} from '@react-navigation/native';
import images from '../../res/images';
import stylesCustom from '../../res/stylesCustom';
import sizes from '../../res/sizes';
import Icon from 'react-native-vector-icons/AntDesign';
import {colors} from '../../res/colors';
import IconRight from '../../component/icons/IconRight';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HeaderCustom from '../../component/header/HeaderCustom';
export default function Setting({
  navigation,
}: {
  navigation: NavigationProp<Record<string, any>>;
}) {
  return (
    <View style={{flex: 1}}>
      <HeaderCustom
        title="Tuỳ chọn"
        back
        onBackPress={() => navigation.goBack()}
      />
      <View style={stylesCustom.viewContainer}>
        <View style={styles.view1}>
          <Pressable
            style={styles.btn}
            onPress={() => navigation.navigate('Numerology')}>
            <View style={stylesCustom.row}>
              <FontAwesome name="grav" color={colors.black} size={30} />
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
                color={colors.black}
                size={30}
              />
              <Text style={stylesCustom.txt1}>Thông tin cá nhân</Text>
            </View>
            <IconRight />
          </Pressable>
          <Pressable
            style={styles.btn}
            onPress={() =>
              Linking.openURL(
                'https://play.google.com/store/apps/dev?id=7690261171901385729',
              ).catch(err => console.error('Lỗi:', err))
            }>
            <View style={stylesCustom.row}>
              <FontAwesome name="th-large" color={colors.black} size={30} />
              <Text style={stylesCustom.txt1}>Ứng dụng của chúng tôi</Text>
            </View>
            <IconRight onPress={() => {}} />
          </Pressable>
        </View>
        <View style={[styles.view1, styles.view2]}>
          <View style={styles.view3}>
            <FontAwesome name="comments" color={colors.black} size={25} />
            <Text style={stylesCustom.txt2}>Góp ý </Text>
          </View>
          <View style={styles.view3}>
            <FontAwesome name="star" color={colors.black} size={25} />
            <Text style={stylesCustom.txt2}>Đánh giá</Text>
          </View>
          <View style={styles.view3}>
            <FontAwesome name="share-square" color={colors.black} size={25} />
            <Text style={stylesCustom.txt2}>Chia sẻ</Text>
          </View>
        </View>
        <Image
          source={images.bottom}
          style={{
            position: 'absolute',
            bottom: 0,
            width: sizes.width,
            height: 180,
          }}
        />
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
    marginTop: 50,
    padding: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: colors.black,
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
