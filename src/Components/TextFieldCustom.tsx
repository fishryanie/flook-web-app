import { useState, useEffect } from 'react';
import { Controller } from 'react-hook-form';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export interface InputCustomProps {
  field: string;
  label?: string | undefined;
  touched?: any | undefined;
  errors?: any | undefined;
  values?: string | undefined;
  handleBlur?: any | undefined;
  handleChange?: any | undefined;
  control?: any | undefined;
  register?: any;
  setValue?: any | undefined;
}

const InputCustom: React.FC<InputCustomProps> = (props) => {
  const { field, label, errors, control } = props;

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const typeInput = () => {
    if (showPassword && (field === 'password' || field === 'passwordComfirm' || field === 'password_New' || field === 'password_NewComfirm' || field === 'password_Current')) {
      return 'text';
    } else if (!showPassword && (field === 'password' || field === 'passwordComfirm' || field === 'password_New' || field === 'password_NewComfirm' || field === 'password_Current')) {
      return 'password';
    } else {
      return 'text';
    }
  };

  return (
    <FormControl fullWidth error={Boolean(!!errors)}>
      <InputLabel>{label}</InputLabel>
      <Controller
        name={field}
        control={control}
        defaultValue=''
        render={({ field: { onChange, onBlur, value }}) => (
          <OutlinedInput
            label={label}
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            type={typeInput()}
            endAdornment={
              (field === 'password' || field === 'passwordComfirm' || field === 'password_New' || field === 'password_NewComfirm' || field === 'password_Current') && (
                <InputAdornment position="end">
                  <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end" size="large">
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )
            }
            inputProps={{}}
          />
        )}
      />
      {errors && <FormHelperText error>{errors.message}</FormHelperText>}
    </FormControl>
  );
};

export default InputCustom;
