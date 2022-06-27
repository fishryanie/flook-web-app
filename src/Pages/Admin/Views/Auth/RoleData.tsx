import { useForm } from 'react-hook-form';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { Fragment, useEffect, useState } from 'react';
import { LoginSchema } from '../../../../Functions/Validator';
import { styled } from '@mui/material/styles';
import Radio, { RadioProps } from '@mui/material/Radio';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Step from '@mui/material/Step';
import Grid from '@mui/material/Grid';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import TabContext from '@mui/lab/TabContext';
import FormLabel from '@mui/material/FormLabel';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import StepContent from '@mui/material/StepContent';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import LinearProgress from '@mui/material/LinearProgress';
import FormControlLabel from '@mui/material/FormControlLabel';
import CircularProgress from '@mui/material/CircularProgress';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import TextFieldSearch from '../../../../Components/TextFieldSearch';
import WrapperDiaLog from '../../../../Components/WrapperDiaLog';
import InputCustom from '../../../../Components/TextFieldCustom';
import TableCustom from '../../../../Components/TableCustom';
import Selector from '../../../../Store/Selector';
import Action from '../../../../Store/Actions';
import { GridActionsCellItem, GridRowId, GridRowParams } from '@mui/x-data-grid';
import actionTypes from '../../../../Store/Actions/constants';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Divider from '@mui/material/Divider';
import Switch from '@mui/material/Switch';
import Checkbox from '../../../../Components/Checkbox';

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

const selectRoles = [
  { id: 1, name: 'users' },
  { id: 2, name: 'authors' },
  { id: 3, name: 'voice actor' },
  { id: 4, name: 'collaborators' },
  { id: 5, name: 'root admin' },
  { id: 6, name: 'data admin' },
  { id: 7, name: 'app admin' },
  { id: 8, name: 'service admin' },
];

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

  const onSubmit = (data: any) => {
    console.log('values', data);
  };
  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Stepper activeStep={activeStep} orientation="vertical">
        <Step>
          <StepLabel>Info Role</StepLabel>
          <StepContent>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12}>
                <InputCustom control={control} errors={errors.name} field="name" label="Name" />
              </Grid>
              <Grid className="box-button-form" item xs={12} sm={12}>
                <button className="handle-next-button" type="submit" onClick={handleNext}>
                  <span className="handle-next-button__title">Continue</span>
                  <span className="handle-next-button__icon">
                    <i className="bx bx-check-double"></i>
                  </span>
                </button>
                <Button disabled={activeStep === 0} onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                  Back
                </Button>
              </Grid>
            </Grid>
            <Box></Box>
          </StepContent>
        </Step>

        <Step>
          <StepLabel>Choose other</StepLabel>
          <StepContent>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12}>
                <FormControl>
                  <FormLabel id="demo-customized-radios">Deleted</FormLabel>
                  <RadioGroup row defaultValue="false" aria-labelledby="demo-customized-radios" name="customized-radios">
                    <FormControlLabel value="false" control={<BpRadio />} label="No deleted" />
                    <FormControlLabel value="true" control={<BpRadio />} label="Deleted" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid className="box-button-form" item xs={12} sm={12}>
                <button className="handle-next-button" type="submit" onClick={handleNext}>
                  <span className="handle-next-button__title">Continue</span>
                  <span className="handle-next-button__icon">
                    <i className="bx bx-check-double"></i>
                  </span>
                </button>
                <Button disabled={activeStep === 0} onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                  Back
                </Button>
              </Grid>
            </Grid>
          </StepContent>
        </Step>

        <Step>
          <StepLabel>Choose Picture</StepLabel>
          <StepContent></StepContent>
        </Step>
        <Button disabled={activeStep === 0} onClick={handleSubmit(onSubmit)} sx={{ mt: 1, mr: 1 }}>
          Submit
        </Button>
      </Stepper>
    </form>
  );
};

const InportFile: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const Input = styled('input')({ display: 'none' });
  const handleImport = () => {
    setLoading(true);
  };
  return (
    <Fragment>
      {loading && <LinearProgress color="secondary" sx={{ transform: 'translateY(-5px)' }} />}

      <DialogContent>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12}>
            <Typography>Select File</Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <label htmlFor="contained-button-file">
              <Input accept="image/*" id="contained-button-file" multiple type="file" />
              <Button fullWidth component="span" variant="outlined">
                Upload
              </Button>
            </label>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Typography>Select Input File Type</Typography>
          </Grid>
          <Grid className="card-box" item xs={12} sm={6}>
            <label className="card">
              <input className="radio-card" name="plan" type="radio" defaultChecked />
              <span className="plan-details">
                <span className="plan-type">Json</span>
              </span>
            </label>
          </Grid>
          <Grid item xs={12} sm={6}>
            <label className="card">
              <input name="plan" className="radio-card" type="radio" />
              <span className="plan-details" aria-hidden="true">
                <span className="plan-type">CSV</span>
              </span>
            </label>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <button className="handle-next-button" onClick={handleImport}>
          <span className="handle-next-button__title">Import</span>
          <span className="handle-next-button__icon">{loading ? <CircularProgress color="success" sx={{ p: 1 }} /> : <i className="bx bx-send"></i>}</span>
        </button>
      </DialogActions>
    </Fragment>
  );
};

const ListFeatures: React.FC = () => {
  const [open, setOpen] = useState();
  const [checked, setChecked] = useState(['wifi']);
  const infoRowTable = useSelector((state: RootStateOrAny) => state.AppReducer.infoRowTable)
  const arrayFeature = useSelector((state: RootStateOrAny) => state.AuthReducer.arrayFeature)
  const arrayFeatureGroup = useSelector((state: RootStateOrAny) => state.AuthReducer.arrayFeatureGroups)
  
  console.log('arrayFeatureGroup', arrayFeatureGroup)

  const handleClick = (index: any) => () => {
    setOpen(open === index ? null : index)
  };

  const handleToggle = (value: string) => () => {
    
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="h1" id="nested-list-subheader">
          {infoRowTable?.name}
        </ListSubheader>
      }
    >
      {arrayFeatureGroup?.map((featureGroup: any, index: number) => (
        <Fragment>
          <Divider />
          <ListItemButton onClick={handleClick(index)}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={featureGroup.featureGroupName} />
            {open === index ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open === index ? true : false} timeout="auto" unmountOnExit>
            {featureGroup.features?.map((feature: any, index: number) => (
              <List component="div" disablePadding key={index}>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary={feature.featureName} />
                  <Switch
                    edge="end"
                    // onChange={handleToggle('bluetooth')}
                    // checked={checked.indexOf('bluetooth') !== -1}
                    inputProps={{
                      'aria-labelledby': 'switch-list-label-bluetooth',
                    }}
                  />
                </ListItemButton>
              </List>
            ))}
            
           
          </Collapse>
        </Fragment>
      ))}
    </List>
  );
};

const DialogRole: React.FC = () => {
  const [tab, setTap] = useState<string>('1');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTap(newValue);
  };
  return (
    <Box sx={{ width: '450px', height: 'auto', typography: 'body1' }}>
      <TabContext value={tab}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Manual Input" value="1" />
            <Tab label="Import file" value="2" />
            <Tab label="Insert document" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ p: 0 }}>
          <RenderForm />
        </TabPanel>
        <TabPanel value="2" sx={{ p: 0 }}>
          <InportFile />
        </TabPanel>
        <TabPanel value="3">Item Two</TabPanel>
      </TabContext>
    </Box>
  );
};

function RoleData() {
  const arrayRole = Selector.auth.DataManyRole();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Action.auth.FindManyRole(''));
    dispatch(Action.auth.FindManyFeature(''))
    dispatch(Action.auth.FindManyFeatureGroup(''))
  }, []);

  const showInfoRow = (row: GridRowParams) => () => {
    dispatch({type: 'infoRowTable', payload: row})
    dispatch({type: actionTypes.openDialog})
  };

  const columnRole: any = [
    { width: 100, editable: true, hide: true, field: 'id', headerName: 'Stt' },
    { width: 120, editable: true, field: 'name', headerName: 'Name' },
    { width: 400, editable: false, field: 'description', headerName: 'Description' },
    { width: 120,
      headerName: '##',
      field: 'actions',
      type: 'actions',
      getActions: (params: GridRowParams) => [
        <GridActionsCellItem label="isActive" sx={{ m: 0, p: 0 }} icon={<VisibilityIcon />} onClick={showInfoRow(params.row)}/>,
        <GridActionsCellItem label="Edit" sx={{ m: 0, p: 0 }} icon={<SettingsOutlinedIcon sx={{ m: 0, p: 0 }} />} />,
        <GridActionsCellItem
          label="Delete"
          sx={{ m: 0, p: 0 }}
          icon={<DeleteOutlineOutlinedIcon sx={{ m: 0, p: 0 }} />}
          // onClick={deleteUser(params.row._id)}
        />,
      ],
    },
  ];

  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <WrapperDiaLog Component={DialogRole} />
      <TableCustom title="User Data" array={arrayRole} columns={columnRole} />
    </Box>
  );
}

export default RoleData;
