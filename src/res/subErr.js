const ErrorSub = {
  'The birth day field must be a valid date.': 'Ngày sinh không hợp lệ',
  'The name field is required.': 'Tên là bắt buộc',
  'The birth day field is required.': 'Ngày sinh là bắt buộc',
};
export function ErrorSubs(val) {
  return ErrorSub[val] || '';
}
