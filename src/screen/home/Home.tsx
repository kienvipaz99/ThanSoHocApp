import {
  Image,
  LayoutAnimation,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import images from '../../res/images';
import stylesCustom from '../../res/stylesCustom';
import sizes from '../../res/sizes';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {RootState} from '../../redux/store/store';
import {colors} from '../../res/colors';
import {fonts} from '../../res/fonts';
import Icons from 'react-native-vector-icons/Ionicons';
import {NavigationProp} from '@react-navigation/native';
import Banner from '../banner/Banner';
export default function Home({
  navigation,
}: {
  navigation: NavigationProp<Record<string, any>>;
}) {
  const useAppSelect: TypedUseSelectorHook<RootState> = useSelector;
  const numbers = useAppSelect(data => data?.getInfor?.getinfor);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const toggle = () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    };
    toggle();
  }, [show]);
  let headerStyle = Object.assign({}, styles.view3);
  if (!show) {
    //@ts-ignore
    headerStyle.height;
  }
  return (
    <View style={stylesCustom.conatainer}>
      <View style={styles.viewImg}>
        <Image source={images.background} />
      </View>
      <View style={styles.view}>
        <View>
          <View style={styles.view1}>
            <View style={stylesCustom.row}>
              <Image source={images.iconuser} style={styles.img} />
              <View>
                <Text style={styles.txt}>{numbers?.name}</Text>
                <Text
                  style={
                    styles.txt1
                  }>{`${numbers?.day}/${numbers?.month}/${numbers?.year}`}</Text>
              </View>
            </View>
            <Icons
              name="settings-sharp"
              color={colors.white}
              size={30}
              onPress={() => navigation.navigate('Setting')}
            />
          </View>
        </View>
        <ScrollView>
          <Banner />
          <Text style={[styles.txt, styles.view2]}>CÁC SỐ CHÍNH</Text>
          <View style={{marginBottom: 40}}>
            <View style={styles.view3}>
              <View style={styles.view4}>
                <Pressable style={styles.round}>
                  <Text style={styles.txt3}>Số đường đời</Text>
                  <Text style={styles.txt2}>{numbers?.numbers?.duong_doi}</Text>
                </Pressable>
                <Pressable style={styles.round}>
                  <Text style={styles.txt3}>Sứ mệnh</Text>
                  <Text style={styles.txt2}>{numbers?.numbers?.su_menh}</Text>
                </Pressable>
                <Pressable style={styles.round}>
                  <Text style={styles.txt3}>Linh hồn</Text>
                  <Text style={styles.txt2}>{numbers?.numbers?.linh_hon}</Text>
                </Pressable>
                <Pressable style={styles.round}>
                  <Text style={styles.txt3}>Nhân cách</Text>
                  <Text style={styles.txt2}>{numbers?.numbers?.nhan_cach}</Text>
                </Pressable>
                <Pressable style={styles.round}>
                  <Text style={styles.txt3}>Đam mê</Text>
                  <Text style={styles.txt2}>{numbers?.numbers?.dam_me}</Text>
                </Pressable>
                <Pressable style={styles.round}>
                  <Text style={styles.txt3}>Thách thức</Text>
                  <Text style={styles.txt2}>
                    {numbers?.numbers?.thachthuc.tt1},
                    {numbers?.numbers?.thachthuc.tt2},
                    {numbers?.numbers?.thachthuc.tt3},
                    {numbers?.numbers?.thachthuc.tt4}
                  </Text>
                </Pressable>
                {show && (
                  <>
                    <Pressable style={styles.round}>
                      <Text style={styles.txt3}>Liên kết ĐĐ SM</Text>
                      <Text style={styles.txt2}>{numbers?.numbers?.dd_sm}</Text>
                    </Pressable>
                    <Pressable style={styles.round}>
                      <Text style={styles.txt3}>Liên kết LH NC</Text>
                      <Text style={styles.txt2}>{numbers?.numbers?.lh_nc}</Text>
                    </Pressable>
                    <Pressable style={styles.round}>
                      <Text style={styles.txt3}>Cân bằng</Text>
                      <Text style={styles.txt2}>
                        {numbers?.numbers?.can_bang}
                      </Text>
                    </Pressable>
                    <Pressable style={styles.round}>
                      <Text style={styles.txt3}>Ngày sinh</Text>
                      <Text style={styles.txt2}>
                        {numbers?.numbers?.chisongaysinh}
                      </Text>
                    </Pressable>
                    <Pressable style={styles.round}>
                      <Text style={styles.txt3}>Trưởng thành</Text>
                      <Text style={styles.txt2}>
                        {numbers?.numbers?.truongthanh}
                      </Text>
                    </Pressable>
                    <Pressable style={styles.round}>
                      <Text style={styles.txt3}>Thiếu</Text>
                      <Text style={styles.txt2}>
                        {numbers.numbers.sothieu.join(', ')}
                      </Text>
                    </Pressable>
                    <Pressable style={styles.round}>
                      <Text style={styles.txt3}>SM-TT</Text>
                      <Text style={styles.txt2}>
                        {numbers?.numbers?.sucmanhtiemthuc}
                      </Text>
                    </Pressable>
                    <Pressable style={styles.round}>
                      <Text style={styles.txt3}>TD-LT</Text>
                      <Text style={styles.txt2}>
                        {numbers?.numbers?.tuduylitri}
                      </Text>
                    </Pressable>
                    <Pressable style={styles.round}>
                      <Text style={styles.txt3}>Chỉ số năm</Text>
                      <Text style={styles.txt2}>
                        {numbers?.numbers?.chisonam}
                      </Text>
                    </Pressable>
                    <Pressable style={styles.round}>
                      <Text style={styles.txt3}>Chỉ số tháng</Text>
                      <Text style={styles.txt2}>
                        {numbers?.numbers?.chisothang}
                      </Text>
                    </Pressable>
                    <Pressable style={styles.round}>
                      <Text style={styles.txt3}>Chặng</Text>
                      <Text style={styles.txt2}>
                        <Text style={styles.txt2}>
                          {numbers?.numbers?.chang?.chang1},
                          {numbers?.numbers?.chang?.chang2},
                          {numbers?.numbers?.chang?.chang3},
                          {numbers?.numbers?.chang?.chang4}
                        </Text>
                      </Text>
                    </Pressable>
                  </>
                )}
              </View>
              <Icons
                name={show ? 'chevron-up' : 'chevron-down'}
                color={colors.white}
                size={30}
                style={{alignSelf: 'center'}}
                onPress={() => setShow(!show)}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewImg: {
    justifyContent: 'center',
    flex: 1,
  },
  view: {
    flex: 1,
    position: 'absolute',
    width: sizes.width,
    height: sizes.height,
  },
  view1: {
    marginTop: sizes.height * 0.1,
    ...stylesCustom.row,
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: sizes.width * 0.9,
  },
  img: {
    height: 60,
    width: 60,
    marginRight: 10,
  },
  txt: {color: colors.white, fontFamily: fonts.bold, fontSize: 20},
  txt1: {color: colors.white, fontFamily: fonts.regular, fontSize: 18},
  view2: {alignSelf: 'center', marginTop: 30},
  view3: {
    alignSelf: 'center',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.white,
    padding: 10,
    marginTop: 20,
  },
  view4: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: sizes.width * 0.9,
  },
  round: {
    height: sizes.width * 0.23,
    width: sizes.width * 0.23,
    borderRadius: 90,
    borderWidth: 2,
    borderColor: colors.white,
    margin: 5,
    borderBlockEndColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  txt2: {
    color: colors.white,
    fontFamily: fonts.bold,
    textAlign: 'center',
    fontSize: 20,
  },
  txt3: {
    color: colors.white,
    fontFamily: fonts.regular,
    textAlign: 'center',
    fontSize: 14,
  },
});
