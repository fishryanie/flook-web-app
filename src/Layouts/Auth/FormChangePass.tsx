import { Formik } from 'formik';
import { SubmitForm } from '../../Functions/GlobalFunc';
import { ChangePasswordSchema } from '../../Functions/Validator';
import useScriptRef from '../../hooks/useScriptRef';
import InputCustom from '../../Components/TextFieldCustom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Cookie from '../../hooks/Cookie';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Action from '../../Store/Actions';
import { useForm } from 'react-hook-form';

const FormChangePass: React.FC = () => {
  const scriptedRef = useScriptRef();
  const initialValues = {
    password: '', password_New: '', password_NewComfirm: '', submit: null
  }

  const dispatch = useDispatch();

  const {
    control,
    reset,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(LoginSchema),
    mode: 'all',
    criteriaMode: 'all',
    shouldFocusError: true,
  });

  const onSubmit = (data: any) => {
    dispatch(Action.auth.ChangePass(data))
    console.log('values', data);
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
          <InputCustom control={control} errors={errors.password} field="password" label="Mật khẩu hiện tại" />
        </Grid>
        <Grid item xs={12} sm={12}>
          <InputCustom control={control} errors={errors.password_New} field="password_New" label="Mật khẩu mới" />
        </Grid>
        <Grid item xs={12} sm={12}>
          <InputCustom control={control} errors={errors.password_NewComfirm} field="password_NewComfirm" label="Xác nhận mật khẩu" />
        </Grid>
      </Grid>
      <Box sx={{ mt: 2 }}>
        <Button
          disableElevation
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          color="secondary"
        >
          Gửi
        </Button>
      </Box>
    </form>
  );
}

export default FormChangePass
