const ErrorSub = {
  'The birth day field must be a valid date.': 'Ngày sinh không hợp lệ',
  'The full name field is required.': 'Tên là bắt buộc',
  'The birth day field is required.': 'Ngày sinh là bắt buộc',
  'The nam must be at least 1.': 'Năm sinh là bắt buộc',
  'The thang must be at least 1.': 'Tháng sinh là bắt buộc',
  'The ngay must be at least 1.': 'ngày sinh là bắt buộc',
};
export function ErrorSubs(val) {
  return ErrorSub[val] || '';
}
