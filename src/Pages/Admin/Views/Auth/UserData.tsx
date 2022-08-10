import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { columnsUsers } from '../../../../Components/TypeColums';
import { styled } from '@mui/material/styles';
import Radio, { RadioProps } from '@mui/material/Radio';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Step from '@mui/material/Step';
import Grid from '@mui/material/Grid';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import TabContext from '@mui/lab/TabContext';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import StepContent from '@mui/material/StepContent';
import FormControlLabel from '@mui/material/FormControlLabel';
import SendIcon from '@mui/icons-material/Send';

import TextFieldSearch from '../../../../Components/TextFieldSearch';
import WrapperDiaLog from '../../../../Components/WrapperDiaLog';
import InputCustom from '../../../../Components/TextFieldCustom';
import TableCustom from '../../../../Components/TableCustom';
import Action from '../../../../Store/Actions';
import actionTypes from '../../../../Store/Actions/constants';
import UpLoadImage from '../../../../Components/UpLoadImage';

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 16,
  height: 16,
  boxShadow: theme.palette.mode === 'dark' ? '0 0 0 1px rgb(16 22 26 / 40%)' : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
  backgroundImage: theme.palette.mode === 'dark' ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))' : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background: theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#137cbd',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#106ba3',
  },
});

function BpRadio(props: RadioProps) {
  return (
    <Radio
      sx={{
        '&:hover': {
          bgcolor: 'transparent',
        },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

const RenderForm: React.FC = () => {

  const formData = new FormData()

  const arrayRole = useSelector((state: RootStateOrAny) => state.AuthReducer.arrayRole)
  const typeDialog = useSelector((state: RootStateOrAny) => state.AppReducer.typeDialog)
  const infoRowTable = useSelector((state: RootStateOrAny) => state.AppReducer.infoRowTable)

  const [open, setOpen] = useState();
  const [activeStep, setActiveStep] = useState(0);

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

  const dispatch = useDispatch();

  const handleNext = () => setActiveStep(activeStep + 1);
  const handleBack = () => setActiveStep(activeStep - 1);
  const handleReset = () => setActiveStep(0);

  useEffect(() => {
    if (typeDialog !== 'FORM_CREATE') {
      for (const key in infoRowTable) {
        if (key === 'images') {
          setValue(key, infoRowTable[key]?.background?.url)
        }
        setValue(key, infoRowTable[key])
      }
    }
  }, []);

  const onSubmit = (data: any) => {
    if (typeDialog !== 'FORM_CREATE') {
      for (const key in data) {
        if (key === 'images') {
          formData.append(key, data[key][0])
        }
        if (key === 'roles') {
          Array.isArray(data[key])
            ? data[key].forEach((row: any) => {
              formData.append(key, row._id.toString());
            })
            :
            formData.append(key, data[key])
        }
        if (key === 'isActive') {
          formData.append(key, data[key]);
        }
        formData.append(key, data[key])
      }
      dispatch({
        type: actionTypes.openAccetp, payload: {
          title: 'Just Checking...',
          content: `Grant ${data?.username} rights to ${infoRowTable?.username}`,
          description: `Are you sure you want to edit ${infoRowTable?.username}'s permissions?`,
          handleYes: () => dispatch(Action.auth.UpdateOneUser(infoRowTable._id, formData))
        }
      })
    } else {
      for (const key in data) {
        if (key === 'images') {
          formData.append(key, data[key][0])
        }
        if (key === 'roles') {
          Array.isArray(data[key])
            ? data[key].forEach((row: any) => {
              formData.append(key, row._id.toString());
            })
            :
            formData.append(key, data[key])
        }
        if (key === 'isActive') {
          formData.append(key, data[key]);
        }
        formData.append(key, data[key])
      }
      dispatch(Action.auth.InsertOneUser(formData))
    }
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Stepper activeStep={activeStep} orientation="vertical">
        <Step>
          <StepLabel>Info user</StepLabel>
          <StepContent>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12}>
                <InputCustom control={control} errors={errors.displayName} field="displayName" label="Tên hiện thị" />
              </Grid>
              <Grid item xs={12} sm={12}>
                <InputCustom control={control} errors={errors.phoneNumber} field="phoneNumber" label="Số điện thoại" />
              </Grid>
              <Grid item xs={12} sm={12}>
                <InputCustom control={control} errors={errors.username} field="username" label="Tên đăng nhập" />
              </Grid>
              <Grid item xs={12} sm={12}>
                <InputCustom control={control} errors={errors.email} field="email" label="Email" />
              </Grid>
              {
                (typeDialog !== 'FORM_CREATE') ? <React.Fragment />
                  :
                  <Grid item xs={12} sm={12}>
                    <InputCustom control={control} errors={errors.password} field="password" label="Mật khẩu" />
                  </Grid>
              }
              <Grid item sx={{ mt: 4 }} xs={12} sm={12}>
                <Button color="secondary" variant="outlined" onClick={handleNext}>Tiếp tục</Button>
                <Button color="secondary" disabled={activeStep === 0} onClick={handleBack} sx={{ ml: 2 }}>Trở về</Button>
              </Grid>
            </Grid>
            <Box></Box>
          </StepContent>
        </Step>

        <Step>
          <StepLabel>Set Active</StepLabel>
          <StepContent>
            <Grid container spacing={1}>
              <FormControl>
                <Controller
                  control={control}
                  name="isActive"
                  render={({ field }) => (
                    <RadioGroup {...field}
                      row
                      aria-labelledby="isActive-label"
                      name="controlled-radio-buttons-group"
                    >
                      <FormControlLabel control={<Radio size="small" />} value="true" label="Active" />
                      <FormControlLabel control={<Radio size="small" />} value="false" label="No Active" />
                    </RadioGroup>
                  )}
                />
              </FormControl>
              <Grid item sx={{ mt: 4 }} xs={12} sm={12}>
                <Button color="secondary" variant="outlined" onClick={handleNext}>Tiếp tục</Button>
                <Button color="secondary" disabled={activeStep === 0} onClick={handleBack} sx={{ ml: 2 }}>Trở về</Button>
              </Grid>
            </Grid>
          </StepContent>
        </Step>

        <Step>
          <StepLabel>Vai trò</StepLabel>
          <StepContent>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12}>
                <TextFieldSearch register={register} setValue={setValue} options={arrayRole} field="roles" label="roles" placeholder="Role" />
              </Grid>
              <Grid item sx={{ mt: 4 }} xs={12} sm={12}>
                <Button color="secondary" variant="outlined" onClick={handleNext}>Tiếp tục</Button>
                <Button color="secondary" disabled={activeStep === 0} onClick={handleBack} sx={{ ml: 2 }}>Trở về</Button>
              </Grid>
            </Grid>
          </StepContent>
        </Step>

        <Step>
          <StepLabel>Chọn ảnh</StepLabel>
          <StepContent>
            <UpLoadImage register={register} setValue={setValue} field='images' />
            <Grid item sx={{ mt: 4 }} xs={12} sm={12}>
              <Button color="secondary" variant="outlined" onClick={handleNext}>Tiếp tục</Button>
              <Button color="secondary" disabled={activeStep === 0} onClick={handleBack} sx={{ ml: 2 }}>Trở về</Button>
            </Grid>
          </StepContent>
        </Step>
        {activeStep === 4 &&
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button color="secondary" variant="contained" endIcon={<SendIcon />} onClick={handleSubmit(onSubmit)} sx={{ mt: 1, mr: 1 }}>Gửi</Button>
          </Paper>
        }
      </Stepper>
    </form>
  );
};

const DialogUser: React.FC = () => {
  const [tab, setTap] = useState<string>('1');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTap(newValue);
  };
  return (
    <Box sx={{ width: '450px', height: 'auto', typography: 'body1' }}>
      <TabContext value={tab}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Thêm mới" value="1" />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ p: 0 }}>
          <RenderForm />
        </TabPanel>
      </TabContext>
    </Box>
  );
};


const UserData: React.FC = () => {

  const arrayUser = useSelector((state: RootStateOrAny) => state.AuthReducer.arrayUser)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Action.auth.FindManyUser(''));
    dispatch(Action.auth.FindManyRole());
  }, []);

  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <WrapperDiaLog Component={DialogUser} />
      <TableCustom
        title="Người Dùng"
        array={arrayUser}
        columns={columnsUsers}
      />

    </Box>
  );
};

export default UserData;