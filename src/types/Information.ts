interface Info {
  name: string;
  day: string;
  month: string;
  year: string;
  numbers?: Numbers;
}
interface Infos {
  name: string;
  birth_day: string;
}
interface Numbers {
  name: string;
  birth_day: string;
  duong_doi: number;
  su_menh: number;
  linh_hon: number;
  nhan_cach: number;
  chisongaysinh: number;
  chisonam: number;
  sucmanhtiemthuc: number;
  tuduylitri: number;
  chisothang: number;
  sothieu: [number, number];
  dam_me: number;
  truongthanh: number;
  dd_sm: number;
  lh_nc: number;
  chang: {
    chang1: number;
    chang2: number;
    chang3: number;
    chang4: number;
  };
  thachthuc: {
    tt1: number;
    tt2: number;
    tt3: number;
    tt4: number;
  };
  can_bang: number;
}
