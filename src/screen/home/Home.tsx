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
import {useGetDataThanSoQuery} from '../../redux/api/auth.api';
import HTML from 'react-native-render-html';
import HeaderCustom from '../../component/header/HeaderCustom';
export default function Home({
  navigation,
}: {
  navigation: NavigationProp<Record<string, any>>;
}) {
  const useAppSelect: TypedUseSelectorHook<RootState> = useSelector;
  const numbers = useAppSelect(data => data?.getInfor?.getinfor);
  const {data, isLoading} = useGetDataThanSoQuery('');
  const [meaning, setmeaning] = useState({
    numbers: Number() || undefined,
    data: '',
    name: String() || undefined,
    descriptions: String(),
  });

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
  const showData = ({
    key,
    num,
    numberss,
  }: {
    key: number;
    num?: number;
    numberss?: any;
  }) => {
    //@ts-ignore
    const datass = data?.data[key][`key_${num}`];
    if (numberss) {
      const aa = numberss.map((nums: number) => {
        //@ts-ignore
        return data?.data[key][`key_${nums}`];
      });
      setmeaning({
        numbers: numberss.join(', '),
        data: aa.join(''),
        name: data?.data[key]?.name,
        descriptions: data?.data[key]?.descriptions || '',
      });
    } else {
      setmeaning({
        numbers: num,
        data: datass,
        name: data?.data[key]?.name,
        descriptions: data?.data[key]?.descriptions || '',
      });
    }
  };

  return (
    <View style={styles.view}>
      <HeaderCustom title="Thông tin tra cứu" />
      <View style={styles.view6}>
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
            color={colors.black}
            size={30}
            onPress={() => navigation.navigate('Setting')}
          />
        </View>
      </View>
      <ScrollView
        style={{marginTop: 10, paddingBottom: 40}}
        showsVerticalScrollIndicator={false}>
        <Banner />
        <Text style={[styles.txt, styles.view2]}>CÁC SỐ CHÍNH</Text>
        <View style={{marginBottom: 40}}>
          <View style={styles.view3}>
            <View style={styles.view4}>
              <Pressable
                style={styles.round}
                onPress={() =>
                  showData({
                    key: 0,
                    num: numbers?.numbers?.duong_doi,
                  })
                }>
                <Text style={styles.txt3}>Số đường đời</Text>
                <Text style={styles.txt2}>{numbers?.numbers?.duong_doi}</Text>
              </Pressable>
              <Pressable
                style={styles.round}
                onPress={() =>
                  showData({
                    key: 1,
                    num: numbers?.numbers?.su_menh,
                  })
                }>
                <Text style={styles.txt3}>Sứ mệnh</Text>
                <Text style={styles.txt2}>{numbers?.numbers?.su_menh}</Text>
              </Pressable>
              <Pressable
                style={styles.round}
                onPress={() =>
                  showData({
                    key: 3,
                    num: numbers?.numbers?.linh_hon,
                  })
                }>
                <Text style={styles.txt3}>Linh hồn</Text>
                <Text style={styles.txt2}>{numbers?.numbers?.linh_hon}</Text>
              </Pressable>
              <Pressable
                style={styles.round}
                onPress={() =>
                  showData({
                    key: 11,
                    num: numbers?.numbers?.nhan_cach,
                  })
                }>
                <Text style={styles.txt3}>Nhân cách</Text>
                <Text style={styles.txt2}>{numbers?.numbers?.nhan_cach}</Text>
              </Pressable>
              <Pressable
                style={styles.round}
                onPress={() =>
                  showData({
                    key: 12,
                    num: numbers?.numbers?.dam_me,
                  })
                }>
                <Text style={styles.txt3}>Đam mê</Text>
                <Text style={styles.txt2}>{numbers?.numbers?.dam_me}</Text>
              </Pressable>
              <Pressable
                style={styles.round}
                onPress={() => {
                  showData({
                    key: 12,
                    numberss: [
                      numbers?.numbers?.thachthuc.tt1,
                      numbers?.numbers?.thachthuc.tt2,
                      numbers?.numbers?.thachthuc.tt3,
                      numbers?.numbers?.thachthuc.tt4,
                    ],
                  });
                }}>
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
                  <Pressable
                    style={styles.round}
                    onPress={() =>
                      showData({
                        key: 2,
                        num: numbers?.numbers?.dd_sm,
                      })
                    }>
                    <Text style={styles.txt3}>Liên kết ĐĐ SM</Text>
                    <Text style={styles.txt2}>{numbers?.numbers?.dd_sm}</Text>
                  </Pressable>
                  <Pressable
                    style={styles.round}
                    onPress={() =>
                      showData({
                        key: 16,
                        num: numbers?.numbers?.lh_nc,
                      })
                    }>
                    <Text style={styles.txt3}>Liên kết LH NC</Text>
                    <Text style={styles.txt2}>{numbers?.numbers?.lh_nc}</Text>
                  </Pressable>
                  <Pressable
                    style={styles.round}
                    onPress={() =>
                      showData({
                        key: 4,
                        num: numbers?.numbers?.can_bang,
                      })
                    }>
                    <Text style={styles.txt3}>Cân bằng</Text>
                    <Text style={styles.txt2}>
                      {numbers?.numbers?.can_bang}
                    </Text>
                  </Pressable>
                  <Pressable
                    style={styles.round}
                    onPress={() =>
                      showData({
                        key: 5,
                        num: numbers?.numbers?.chisongaysinh,
                      })
                    }>
                    <Text style={styles.txt3}>Ngày sinh</Text>
                    <Text style={styles.txt2}>
                      {numbers?.numbers?.chisongaysinh}
                    </Text>
                  </Pressable>
                  <Pressable
                    style={styles.round}
                    onPress={() =>
                      showData({
                        key: 7,
                        num: numbers?.numbers?.truongthanh,
                      })
                    }>
                    <Text style={styles.txt3}>Trưởng thành</Text>
                    <Text style={styles.txt2}>
                      {numbers?.numbers?.truongthanh}
                    </Text>
                  </Pressable>
                  <Pressable
                    style={styles.round}
                    onPress={() =>
                      showData({
                        key: 6,
                        numberss: numbers.numbers.sothieu,
                      })
                    }>
                    <Text style={styles.txt3}>Thiếu</Text>
                    <Text style={styles.txt2}>
                      {numbers.numbers.sothieu.join(', ')}
                    </Text>
                  </Pressable>
                  <Pressable
                    style={styles.round}
                    onPress={() =>
                      showData({
                        key: 14,
                        num: numbers.numbers.sucmanhtiemthuc,
                      })
                    }>
                    <Text style={styles.txt3}>SM-TT</Text>
                    <Text style={styles.txt2}>
                      {numbers?.numbers?.sucmanhtiemthuc}
                    </Text>
                  </Pressable>
                  <Pressable
                    style={styles.round}
                    onPress={() =>
                      showData({
                        key: 13,
                        num: numbers.numbers.tuduylitri,
                      })
                    }>
                    <Text style={styles.txt3}>TD-LT</Text>
                    <Text style={styles.txt2}>
                      {numbers?.numbers?.tuduylitri}
                    </Text>
                  </Pressable>
                  <Pressable
                    style={styles.round}
                    onPress={() =>
                      showData({
                        key: 8,
                        num: numbers.numbers.chisonam,
                      })
                    }>
                    <Text style={styles.txt3}>Chỉ số năm</Text>
                    <Text style={styles.txt2}>
                      {numbers?.numbers?.chisonam}
                    </Text>
                  </Pressable>
                  <Pressable
                    style={styles.round}
                    onPress={() =>
                      showData({
                        key: 15,
                        num: numbers.numbers.chisothang,
                      })
                    }>
                    <Text style={styles.txt3}>Chỉ số tháng</Text>
                    <Text style={styles.txt2}>
                      {numbers?.numbers?.chisothang}
                    </Text>
                  </Pressable>
                  <Pressable
                    style={styles.round}
                    onPress={() => {
                      showData({
                        key: 9,
                        numberss: [
                          numbers?.numbers?.chang?.chang1,
                          numbers?.numbers?.chang?.chang2,
                          numbers?.numbers?.chang?.chang3,
                          numbers?.numbers?.chang?.chang4,
                        ],
                      });
                    }}>
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
              color={colors.black}
              size={30}
              style={{alignSelf: 'center'}}
              onPress={() => setShow(!show)}
            />
          </View>
        </View>
        {meaning?.data?.length > 0 && (
          <View style={styles.view5}>
            <Text
              style={[
                styles.txt1,
                {color: colors.black, marginTop: 30, fontFamily: fonts.bold},
              ]}>
              {meaning?.name}
            </Text>
            <View style={styles.round1}>
              <Text style={styles.txt4}>{meaning?.numbers}</Text>
            </View>
            <View style={{width: sizes.width * 0.9}}>
              <HTML
                contentWidth={sizes.width * 0.85}
                source={{
                  html: meaning?.descriptions,
                }}
              />
            </View>
            <View style={{width: sizes.width * 0.9, marginBottom: 50}}>
              <HTML
                contentWidth={sizes.width * 0.85}
                source={{
                  html: meaning?.data,
                }}
              />
            </View>
          </View>
        )}
      </ScrollView>
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
    marginTop: 30,
    ...stylesCustom.row,
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: sizes.width * 0.9,
    paddingBottom: 20,
  },
  img: {
    height: 60,
    width: 60,
    marginRight: 10,
  },
  txt: {color: colors.black, fontFamily: fonts.bold, fontSize: 20},
  txt4: {color: colors.black, fontFamily: fonts.bold, fontSize: 25},

  txt1: {color: colors.black, fontFamily: fonts.regular, fontSize: 18},
  view2: {alignSelf: 'center', marginTop: 30},
  view3: {
    alignSelf: 'center',
    borderRadius: 15,
    padding: 10,
    marginTop: 20,
    backgroundColor: colors.white,
    ...stylesCustom.shadowitem,
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
    borderColor: colors.background,
    margin: 5,
    borderBlockEndColor: '#ea7a2e',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  round1: {
    height: sizes.width * 0.3,
    width: sizes.width * 0.3,
    borderRadius: (sizes.width * 0.3) / 2,
    borderWidth: 2,
    borderColor: colors.background,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    marginTop: 20,
  },
  txt2: {
    color: colors.black,
    fontFamily: fonts.bold,
    textAlign: 'center',
    fontSize: 20,
  },
  txt3: {
    color: colors.black,
    fontFamily: fonts.regular,
    textAlign: 'center',
    fontSize: 14,
  },
  view5: {
    width: sizes.width * 0.95,
    padding: 10,
    borderRadius: 15,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    marginBottom: 50,
    ...stylesCustom.shadowitem,
  },
  view6: {
    width: sizes.width,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: colors.white,
    marginTop: sizes.height * 0.12,
  },
});
