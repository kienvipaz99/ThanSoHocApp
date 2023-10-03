import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import stylesCustom from '../../res/stylesCustom';
import images from '../../res/images';
import {colors} from '../../res/colors';
import {fonts} from '../../res/fonts';
import sizes from '../../res/sizes';
import TextInPut from '../../component/textInput/TextInPut';
import ButtomCustomer from '../../component/btn/ButtomCustomer';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {setDataUser} from '../../redux/state/InformationState';
import {RootState} from '../../redux/store/store';
import {usePostInforMutation} from '../../redux/api/auth.api';
import {NavigationProp} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ErrText from '../../component/errText/ErrText';

export default function Information({
  navigation,
}: {
  navigation: NavigationProp<Record<string, any>>;
}) {
  const useAppSelect: TypedUseSelectorHook<RootState> = useSelector;
  const remember = useAppSelect(data => data?.getInfor?.getinfor);
  const [postInfo, {isLoading}] = usePostInforMutation();
  const [name, setName] = useState(remember?.name);
  const [day, setDay] = useState(remember?.day);
  const [month, setMonth] = useState(remember?.month);
  const [year, setYear] = useState(remember?.year);
  const input1Ref: any = useRef(null);
  const input2Ref: any = useRef(null);
  const input3Ref: any = useRef(null);
  const [err, setErr] = useState({
    name: '',
    date: '',
  });
  const handleTextChange1 = (text: string) => {
    setDay(text);
    if (text.length === 2) {
      input2Ref.current.focus();
    }
  };
  const handleTextChange2 = (text: string) => {
    setMonth(text);
    if (text.length === 2) {
      input3Ref.current.focus();
    }
  };
  const dispatch = useDispatch();
  const Submit = async () => {
    try {
      const data = await postInfo({
        name: name,
        birth_day: `${year}-${month}-${day}`,
      }).unwrap();

      if (data) {
        navigation.navigate('Home');
        dispatch(
          setDataUser({
            name: name,
            day: day,
            month: month,
            year: year,
            numbers: data,
          }),
        );
      }
    } catch (error: any) {
      let err = error.data.errors;
      setErr({
        date: err?.birth_day,
        name: err?.name,
      });
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.view}>
        <Image source={images.logo} style={{marginTop: sizes.height * 0.12}} />

        <Text style={styles.title}>THÔNG TIN CÁ NHÂN</Text>
        <Image source={images.iconuser} style={{marginTop: 30}} />
        <View style={styles.view1}>
          <View style={stylesCustom.row}>
            <Text style={styles.txt}>Họ và Tên :</Text>
            <TextInPut text={name} onChangText={setName} />
          </View>
          {err?.name && <ErrText err={err?.name} />}
          <View style={stylesCustom.row}>
            <Text style={styles.txt}>Ngày sinh :</Text>
            <View style={styles.view2}>
              <TextInPut
                keyboardType="numeric"
                style={styles.txtip}
                maxLength={2}
                inputRef={input1Ref}
                onChangText={handleTextChange1}
                text={day}
              />
              <TextInPut
                keyboardType="numeric"
                style={styles.txtip}
                maxLength={2}
                inputRef={input2Ref}
                onChangText={handleTextChange2}
                text={month}
              />
              <TextInPut
                keyboardType="numeric"
                style={styles.txtip}
                maxLength={4}
                text={year}
                inputRef={input3Ref}
                onChangText={setYear}
              />
            </View>
          </View>
          {err?.date && <ErrText err={err?.date} />}
        </View>
        <View style={styles.view3}>
          <ButtomCustomer
            title="Tra Cứu"
            onPress={Submit}
            isLoading={isLoading}
          />
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
    alignItems: 'center',
    width: sizes.width,
    height: sizes.height,
  },
  title: {
    color: colors.background,
    fontSize: 30,
    fontFamily: fonts.medium,
    marginTop: sizes.height * 0.05,
  },
  txt: {
    color: colors.background,
    fontFamily: fonts.regular,
    fontSize: 20,
    marginTop: 20,
    paddingRight: 20,
  },
  view1: {width: sizes.width * 0.8, marginTop: sizes.height * 0.04},
  view2: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: sizes.width * 0.55,
  },
  txtip: {width: (sizes.width * 0.5) / 3, textAlign: 'center'},
  view3: {marginTop: 50},
});
