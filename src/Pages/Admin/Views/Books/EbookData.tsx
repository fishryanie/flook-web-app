import { useForm } from 'react-hook-form';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import {  useEffect, useState } from 'react';
import { columnsEbooks } from '../../../../Components/TypeColums';
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

import TextFieldSearch from '../../../../Components/TextFieldSearch';
import WrapperDiaLog from '../../../../Components/WrapperDiaLog';
import InputCustom from '../../../../Components/TextFieldCustom';
import TableCustom from '../../../../Components/TableCustom';
import Action from '../../../../Store/Actions';
import actionTypes from '../../../../Store/Actions/constants';
import UpLoadImage from '../../../../Components/UpLoadImage'
import SendIcon from '@mui/icons-material/Send';

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

  const formData = new FormData();
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

  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => setActiveStep(activeStep + 1);
  const handleBack = () => setActiveStep(activeStep - 1);
  const handleReset = () => setActiveStep(0);

  const arrayAuthor = useSelector((state: RootStateOrAny) => state.BookReducer.listAuthor);
  const arrayGenre = useSelector((state: RootStateOrAny) => state.BookReducer.listGenre);

  const infoRowTable = useSelector((state: RootStateOrAny) => state.AppReducer.infoRowTable);
  const typeDialog = useSelector((state: RootStateOrAny) => state.AppReducer.typeDialog);
  const typeImage = useSelector((state: RootStateOrAny) => state.AppReducer.typeImage)

  useEffect(() => {
    dispatch(Action.app.findManyAuthor());
    dispatch(Action.app.findManyGenre());
  }, []);

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
    let updateData: any;
    if (typeDialog !== 'FORM_CREATE') {
      if(typeImage === 'IMAGE'){
        for (const key in data) {
          if (key === 'images') {
            formData.append(key, data[key][0])
          }
          if (key === 'authors') {
            Array.isArray(data[key])
              ? data[key].forEach((row: any) => {
                formData.append(key, row._id.toString());
              })
              :
              formData.append(key, data[key]._id.toString())
          }
          if (key === 'genres') {
            Array.isArray(data[key])
              ? data[key].forEach((row: any) => {
                formData.append(key, row._id.toString());
              })
              :
              formData.append(key, data[key]._id.toString())
          }
          formData.append(key, data[key])
        }
      }else {
        updateData = {
          title: data.title,
          status: data.status,
          description: data.description,
          authors: Array.isArray(data.authors) ? data.authors.map((item: any) => item._id.toString()) : data.authors._id,
          genres: Array.isArray(data.genres) ? data.genres.map((item: any) => item._id.toString()) : data.genres._id,
        }
      }
      dispatch({
        type: actionTypes.openAccetp, payload: {
          title: 'Just Checking...',
          content: `Grant ${data?.title} rights to ${infoRowTable?.title}`,
          description: `Are you sure you want to edit ${infoRowTable?.title}'s permissions?`,
          handleYes: () => dispatch(Action.app.updateOneEbook(infoRowTable?._id, updateData === undefined ? formData : updateData))
        }
      })
    }
    else {
      for (const key in data) {
        if (key === 'images') {
          formData.append(key, data[key][0])
        }
        if (key === 'authors') {
          Array.isArray(data[key])
            ? data[key].forEach((row: any) => {
              formData.append(key, row._id.toString());
            })
            :
            formData.append(key, data[key])
        }
        if (key === 'genres') {
          Array.isArray(data[key])
            ? data[key].forEach((row: any) => {
              formData.append(key, row._id.toString());
            })
            :
            formData.append(key, data[key])
        }
        formData.append(key, data[key])
      }
      dispatch(Action.app.insertOneEbook(formData))
    }
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Stepper activeStep={activeStep} orientation="vertical">
        <Step>
          <StepLabel>Info Ebook</StepLabel>
          <StepContent>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12}>
                <InputCustom control={control} errors={errors.title} field="title" label="Tên" />
              </Grid>
              <Grid item xs={12} sm={12}>
                <InputCustom control={control} errors={errors.status} field="status" label="Trạng Thái" />
              </Grid>
              <Grid item xs={12} sm={12}>
                <InputCustom control={control} errors={errors.description} field="description" label="Giới Thiệu" />
              </Grid>
              <Grid className="box-button-form" item xs={12} sm={12}>
                <Grid item sx={{ mt: 4 }} xs={12} sm={12}>
                  <Button color="secondary" variant="outlined" onClick={handleNext}>Tiếp tục</Button>
                  <Button color="secondary" disabled={activeStep === 0} onClick={handleBack} sx={{ ml: 2 }}>Trở về</Button>
                </Grid>
              </Grid>
            </Grid>
            <Box></Box>
          </StepContent>
        </Step>

        <Step>
          <StepLabel>Chọn tác giả - thể loại</StepLabel>
          <StepContent>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12}>
                <TextFieldSearch register={register} setValue={setValue} options={arrayAuthor} field="authors" label="Tác giả" placeholder="Tác giả" />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextFieldSearch register={register} setValue={setValue} options={arrayGenre} field="genres" label="Thể loại" placeholder="Thể loại" />
              </Grid>
              <Grid className="box-button-form" item xs={12} sm={12}>
                <Grid item sx={{ mt: 4 }} xs={12} sm={12}>
                  <Button color="secondary" variant="outlined" onClick={handleNext}>Tiếp tục</Button>
                  <Button color="secondary" disabled={activeStep === 0} onClick={handleBack} sx={{ ml: 2 }}>Trở về</Button>
                </Grid>
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
        {activeStep === 3 &&
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button color="secondary" variant="contained" endIcon={<SendIcon />} onClick={handleSubmit(onSubmit)} sx={{ mt: 1, mr: 1 }}>Gửi</Button>
          </Paper>
        }
      </Stepper>
    </form>
  );
};

const DialogEbook: React.FC = () => {
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


const EbookData: React.FC = () => {
  const arrayEbook = useSelector((state: RootStateOrAny) => state.BookReducer.listAllBook);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Action.app.findManyEbook());
  }, []);
  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <WrapperDiaLog Component={DialogEbook} />
      <TableCustom
        title="Truyện Tranh"
        array={arrayEbook}
        columns={columnsEbooks}
      />

    </Box>
  );
};

export default EbookData;
