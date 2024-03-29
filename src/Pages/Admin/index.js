import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { IconChevronRight } from '@tabler/icons';
import { AppBar, Box, CssBaseline, Toolbar, useMediaQuery } from '@mui/material';
import { Main } from '../../Assets/Theme/AppStyle';
import Breadcrumbs from '../../Components/extended/Breadcrumbs';
import Header from './Header';
import Sidebar from './Sidebar';
import navigation from './MenuList';
import Action from '../../Store/Actions';

// ==============================|| MAIN LAYOUT ||============================== //

const AdminPage = () => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'));
  const leftDrawerOpened = useSelector(state => state.customizationReducer.opened)

  const dispatch = useDispatch();
  const handleLeftDrawerToggle = () => {
    dispatch({ type: '@customization/SET_MENU', opened: !leftDrawerOpened });
  };

  useEffect(() => {
    dispatch({ type: '@customization/SET_MENU', opened: !matchDownMd });
  }, [matchDownMd]);

  const userLoggin = useSelector((state) => state.AuthReducer.userLoggin)

  useEffect(() => {
    dispatch(Action.auth.FindOneUser())
  }, [dispatch]);

  return (

    <>
      {
        (userLoggin?.roles?.filter((item) => { return item.name === 'Admin' || item.name === 'Moderator' }).length === 0 && (window.location.pathname.includes('/admin') === true))
          ? window.location.replace('/')
          : (
            <Box sx={{ display: 'flex' }}>
              <CssBaseline />
              {/* header */}
              <AppBar
                enableColorOnDark
                position="fixed"
                color="inherit"
                elevation={0}
                sx={{
                  bgcolor: theme.palette.background.default,
                  transition: leftDrawerOpened ? theme.transitions.create('width') : 'none',
                }}
              >
                <Toolbar>
                  <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
                </Toolbar>
              </AppBar>
              {/* drawer */}
              <Sidebar drawerOpen={leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} />
              {/* main content */}
              <Main theme={theme} open={leftDrawerOpened}>
                {/* breadcrumb */}
                <Breadcrumbs separator={IconChevronRight} navigation={navigation} icon title rightAlign />
                <Outlet />
              </Main>

              {/* <Customization /> */}
            </Box>
          )
      }
    </>

  );
};

export default AdminPage;