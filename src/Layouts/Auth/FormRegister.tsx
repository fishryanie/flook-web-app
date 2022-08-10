import { useState } from 'react'
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { RegisterSchema } from '../../Functions/Validator';
import useScriptRef from '../../hooks/useScriptRef';
import Action from '../../Store/Actions'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import InputCustom from '../../Components/TextFieldCustom';
import { useForm } from 'react-hook-form';

const FormRegister: React.FC = props => {
  const dispatch = useDispatch()
  
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
    dispatch(Action.auth.Register(data))
    console.log('values', data);
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
          <InputCustom control={control} errors={errors.email} field="email" label="Nhập email" />
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
export default FormRegister