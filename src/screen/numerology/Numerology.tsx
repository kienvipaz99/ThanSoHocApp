import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import stylesCustom from '../../res/stylesCustom';
import images from '../../res/images';
import sizes from '../../res/sizes';
import Icon from 'react-native-vector-icons/AntDesign';
import {colors} from '../../res/colors';
import {NavigationProp} from '@react-navigation/native';
import HeaderCustom from '../../component/header/HeaderCustom';

export default function Numerology({
  navigation,
}: {
  navigation: NavigationProp<Record<string, any>>;
}) {
  return (
    <View style={stylesCustom.view}>
      <HeaderCustom
        title="thần số học là gì?"
        back
        onBackPress={() => navigation.goBack()}
      />
      <View style={stylesCustom.viewContainer}>
        <ScrollView style={styles.view4} showsVerticalScrollIndicator={false}>
          <Text style={stylesCustom.txt2}>
            Đây là một bộ môn khoa học dựa trên việc quy đổi các chữ cái trong
            tên hoặc các chữ số trong ngày tháng năm sinh thành các con số từ 1
            đến 9. Mỗi con số sẽ biểu thị cho một thuộc tính, khả năng, điểm
            mạnh, điểm yếu hay thách thức của một người. Bộ môn này giúp người
            ta khám phá bản thân, hiểu rõ sứ mệnh và mục đích cuộc sống, lựa
            chọn công việc, đối tác, bạn bè phù hợp và cải thiện chất lượng cuộc
            sống.
          </Text>
          <Text
            style={[stylesCustom.txt, {marginTop: 30, color: colors.black}]}>
            Ý nghĩa về các con số
          </Text>
          <Text style={{...stylesCustom.txt2, marginBottom: 40}}>
            Mỗi con số có ý nghĩa riêng biệt. Dưới đây là một số ý nghĩa phổ
            biến của các con số trong lĩnh vực này: Số 1: Tượng trưng cho sự
            khởi đầu, tinh thần lãnh đạo, sự độc lập và sự tự thể hiện.{`\n`}
            Số 2:Biểu thị cho sự cân bằng, hòa hợp, quan hệ và tình bạn. Bên
            cạnh đó, nó cũng có thể tượng trưng cho lựa chọn và quyết định.
            {`\n`}
            Số 3: Tượng trưng cho sự sáng tạo, lạc quan, tương tác xã hội và
            tinh thần vui vẻ.{`\n`}
            Số 4: Biểu thị sự ổn định, cơ cấu, chuyên tâm và sự cần cù.{`\n`}
            Số 5: Tượng trưng cho sự tự do, thay đổi, phiêu lưu và khao khát
            trải nghiệm mới.{`\n`}
            Số 6: Biểu thị cho sự trách nhiệm, tình yêu gia đình, yêu thương và
            sự chăm sóc. Đây là con số của sự cân đối và hòa hợp.{`\n`}
            Số 7: Tượng trưng cho sự nghiên cứu, sâu sắc, tâm linh và sự cân
            nhắc.
            {`\n`}
            Số 8: Biểu thị sự thịnh vượng, thành công về tài chính, quyền lực và
            quản lý. Nó cũng liên quan đến sự cân bằng giữa tâm hồn và vật chất.
            {`\n`}
            Số 9: Tượng trưng cho sự hoàn thiện, tình thương và lòng nhân ái. Nó
            có thể liên quan đến việc kết thúc một giai đoạn và chuẩn bị cho một
            điều mới mẻ. Các con số cao hơn thường được tính bằng cách cộng các
            chữ số lại cho đến khi đạt đến một con số từ 1 đến 9. Tuy nhiên, ý
            nghĩa của các con số có thể có sự biến đổi tùy theo ngữ cảnh và
            phương pháp cụ thể mà người thầy hoặc học giả sử dụng.
          </Text>
        </ScrollView>
      </View>
      <Image
        source={images.bottom}
        style={{
          position: 'absolute',
          bottom: 0,
          width: sizes.width,
          height: 180,
          zIndex: -10,
        }}
      />
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
    width: sizes.width,
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
  view4: {
    width: sizes.width * 0.95,
    alignSelf: 'center',
    marginTop: 40,
  },
});
