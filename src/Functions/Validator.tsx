import * as Yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .required('Tên đăng nhập không được để trống!')
    .max(32, 'Tên đăng nhập tối đa 32 kí tự!')
    .min(8, 'Tên đăng nhập ít nhất 8 kí tự!'),

  password: Yup.string()
    .required('Mật khẩu không được để trống!')
    .min(8, 'Mật khẩu ít nhất 8 kí tự!'),
})

export const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email không được để trống!')
    .max(32, 'Email phải tối đa 32 kí tự!')
    .min(8, 'Email phải ít nhất 8 kí tự!')
    .email('Email sai định dạng!'),
})

export const FogotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email không được để trống!')
    .max(32, 'Email phải tối đa 32 kí tự!')
    .min(8, 'Email phải ít nhất 8 kí tự!')
    .email('Email sai định dạng!'),

})

export const ChangePasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required('Mật khẩu hiện tại không được để trống!')
    .min(8, 'Mật khẩu ít nhất 8 kí tự!'),

  password_New: Yup.string()
    .required('Mật khẩu mới không được để trống!')
    .min(8, 'Mật khẩu mới ít nhất 8 kí tự!'),

  password_NewComfirm: Yup.string()
    .required('Không được để trống!')
    .min(8, 'Ít nhất 8 kí tự!')
    .oneOf([Yup.ref('password_New')], 'Mật khẩu không khớp!'),

})

export const FormUseData = Yup.object().shape({

  displayName: Yup.string()
    .required('Tên hiện thị không được để trống!'),

  phoneNumber: Yup.string()
  .required('Số điện thoại không được để trống!')
  .matches(phoneRegExp, 'Sai định dạng!'),

  username: Yup.string()
    .required('Tên đăng nhập không được để trống!')
    .max(32, 'Tên đăng nhập tối đa 32 kí tự!')
    .min(8, 'Tên đăng nhập ít nhất 8 kí tự!'),

  password: Yup.string()
    .required('Mật khẩu không được để trống!')
    .min(8, 'Mật khẩu ít nhất 8 kí tự!'),

  email: Yup.string()
    .required('Email không được để trống!')
    .max(32, 'Email phải tối đa 32 kí tự!')
    .min(8, 'Email phải ít nhất 8 kí tự!')
    .email('Email sai định dạng!'),

})

export const FormUseUpDateData = Yup.object().shape({

  displayName: Yup.string()
    .required('Tên hiện thị không được để trống!'),

  phoneNumber: Yup.string()
  .required('Số điện thoại không được để trống!')
  .matches(phoneRegExp, 'Sai định dạng!'),
})

export const FormRoleData =Yup.object().shape({
  name: Yup.string()
    .required('Tên không được để trống!'),
})

export const FormEbookData =Yup.object().shape({
  title: Yup.string()
    .required('Tên không được để trống!'),
})