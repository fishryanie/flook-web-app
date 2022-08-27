import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

import InputCustom from '../../Components/TextFieldCustom';
import { useForm } from 'react-hook-form';
import Action from '../../Store/Actions';

import { LoginSchema } from '../../Functions/Validator';
import { yupResolver } from '@hookform/resolvers/yup';

const FormLogin: React.FC = () => {
  const [checked, setChecked] = useState(true);

  const dispatch = useDispatch();

  const {
    control,
    reset,
    setValue,
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
    mode: 'all',
    criteriaMode: 'all',
    shouldFocusError: true,
  });

  const onSubmit = (data: any) => {
    dispatch(Action.auth.Login(data))
    console.log('values', data);
  };

  return (

    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
          <InputCustom control={control} errors={errors.username} field="username" label="Tên Đăng Nhập" />
        </Grid>
        <Grid item xs={12} sm={12}>
          <InputCustom control={control} errors={errors.password} field="password" label="Mật Khẩu" />
        </Grid>
      </Grid>
      <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
        <FormControlLabel label="Nhớ mật khẩu" control={<Checkbox checked={checked} onChange={(event: any) => setChecked(event.target.checked)} name="checked" color="primary" />} />
      </Stack>

      <Box sx={{ mt: 2 }}>
        <Button size="large" type="submit" color="secondary" variant="contained" fullWidth disableElevation>
        Gửi
        </Button>
      </Box>
    </form>

  );
};

export default FormLogin;
