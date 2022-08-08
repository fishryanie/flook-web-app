import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import AuthWrapper from './AuthWrapper';
import FormLogin from './FormLogin';
import FormRegister from './FormRegister';
import FormFogotPass from './FormFogotPass';
import FormChangePass from './FormChangePass';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import Action from '../../Store/Actions';
import { toast } from 'react-toastify';
import { toastConfig } from '../../Functions/toast';


export interface IAppProps {

}

const AuthDiaLog: React.FC = props => {

  const [value, setValue] = useState('1');

  const styleTabPanel = { height: 'auto', maxWidth: 450 }

  const dispatch = useDispatch()

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(Action.auth.FindOneUser())
  }, []);

  const userLoggin = useSelector((state: RootStateOrAny) => state.AuthReducer.userLoggin)

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        {
          (Object.entries(userLoggin).length === 0)
            ?
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Login" value="1" />
                <Tab label="Register" value="2" />
                <Tab label="Forgot Password" value="3" />
                <Tab label="Change Password" onClick={() => toast.warning('Vui lòng đăng nhập!', toastConfig)} />
              </TabList>
            </Box>
            :
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                {/* <Tab label="Login" value="1" />
                <Tab label="Register" value="2" />
                <Tab label="Forgot Password" value="3" /> */}
                <Tab label="Change Password" value="1" />
              </TabList>
            </Box>
        }
        {/* <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Login" value="1" />
            <Tab label="Register" value="2" />
            <Tab label="Forgot Password" value="3" />
            {
              (Object.entries(userLoggin).length === 0)
                ? <Tab label="Change Password" onClick={() => toast.warning('Vui lòng đăng nhập!', toastConfig)} />
                : <Tab label="Change Password" value="4" />
            }
          </TabList>
        </Box> */}
        {/* <TabPanel value="1" sx={styleTabPanel}><AuthWrapper Component={FormLogin} /></TabPanel>
        <TabPanel value="2" sx={styleTabPanel}><AuthWrapper Component={FormRegister} hidden={true} /></TabPanel>
        <TabPanel value="3" sx={styleTabPanel}><AuthWrapper Component={FormFogotPass} hidden={true} /></TabPanel> */}
        {
          (Object.entries(userLoggin).length === 0)
            ?
            <div>
              <TabPanel value="1" sx={styleTabPanel}><AuthWrapper Component={FormLogin} /></TabPanel>
              <TabPanel value="2" sx={styleTabPanel}><AuthWrapper Component={FormRegister} hidden={true} /></TabPanel>
              <TabPanel value="3" sx={styleTabPanel}><AuthWrapper Component={FormFogotPass} hidden={true} /></TabPanel>
              <TabPanel value="4" sx={styleTabPanel}><AuthWrapper Component={FormChangePass} hidden={true} /></TabPanel>
            </div>
            : <TabPanel value="1" sx={styleTabPanel}><AuthWrapper Component={FormChangePass} hidden={true} /></TabPanel>
        }
      </TabContext>
    </Box>
  );
}

export default AuthDiaLog