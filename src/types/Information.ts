interface Info {
  name: string;
  day: string;
  month: string;
  year: string;
  numbers?: Numbers;
}
interface Infos {
  full_name: string;
  ngay: number;
  thang: number;
  nam: number;
}
interface Numbers {
  duong_doi: number;
  su_menh: number;
  lk_duongdoi_sumenh: number;
  linh_hon: number;
  nhan_cach: number;
  lk_linhhon_nhancach: number;
  can_bang: number;
  ngay_sinh: number;
  truong_thanh: number;
  so_thieu: [number, number];
  suc_manh_tiem_thuc: number;
  tu_duy_li_tri: number;
  dam_me: [number, number];
  chi_so_nam: number;
  chi_so_thang: number;
  chang: {
    chang_1: number;
    chang_2: number;
    chang_3: number;
    chang_4: number;
  };
  thach_thuc: {
    thachThuc_1: number;
    thachThuc_2: number;
    thachThuc_3: number;
    thachThuc_4: number;
  };
}
