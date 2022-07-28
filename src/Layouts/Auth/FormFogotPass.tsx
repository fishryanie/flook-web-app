import { useState } from 'react'
import { Formik } from 'formik';
import { FogotPasswordSchema } from '../../Functions/Validator';
import Action from '../../Store/Actions'
import useScriptRef from '../../hooks/useScriptRef';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import { SubmitForm } from '../../Functions/GlobalFunc'

import InputCustom from '../../Components/TextFieldCustom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

const FormFogotPass: React.FC = () => {
  const scriptedRef = useScriptRef();
  const [checked, setChecked] = useState(true);

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
    dispatch(Action.auth.ForgotPass('', data))
    console.log('values', data);
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
          <InputCustom control={control} errors={errors.email} field="email" label="Email" />
        </Grid>
      </Grid>
      {/* <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
        <FormControlLabel label="Remember me" control={
          <Checkbox
            checked={checked}
            onChange={(event: any) => setChecked(event.target.checked)}
            name="checked"
            color="primary"
          />}
        />
        <Typography variant="subtitle1" color="secondary" sx={{ textDecoration: 'none', cursor: 'pointer' }}>
          Forgot Password?
        </Typography>
      </Stack> */}

      <Box sx={{ mt: 2 }}>
        <Button
          disableElevation
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          color="secondary"
        >
          Submit
        </Button>
      </Box>
    </form>
  );
}

export default FormFogotPass
