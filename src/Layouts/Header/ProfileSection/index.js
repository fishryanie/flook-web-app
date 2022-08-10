import React, { useState, useRef, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import Badge from '@mui/material/Badge';

import {
  Avatar,
  Box,
  Chip,
  ClickAwayListener,
  InputAdornment,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  OutlinedInput,
  Paper,
  Popper,
  Stack,
  Typography,
} from '@mui/material';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import MainCard from '../../../Components/cards/MainCard';
import Transitions from '../../../Components/extended/Transitions';
// import UpgradePlanCard from './UpgradePlanCard';

// assets
import { IconLogout, IconSearch, IconSettings, IconDeviceAnalytics } from '@tabler/icons';
import Action from '../../../Store/Actions';
import namePage from '../../../Constants/NamePage'
import { toast } from 'react-toastify';
import { toastConfig } from '../../../Functions/toast';

// ==============================|| PROFILE MENU ||============================== //

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const ProfileSection = (props) => {
  const { showAt } = props
  const theme = useTheme();
  const customization = useSelector((state) => state.customizationReducer);
  const navigate = useNavigate();

  const [value, setValue] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [open, setOpen] = useState(false);
  /**
   * anchorRef is used on different componets and specifying one type leads to other components throwing an error
   * */
  const anchorRef = useRef(null);

  const dispatch = useDispatch();

  const handleLogout = async () => {
    dispatch(Action.auth.Logout())
  }

  const handleToAdmin = async () => {
    navigate(namePage.dashboard)
  }

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  useEffect(() => {
    dispatch(Action.auth.FindOneUser())
  }, []);

  const userLoggin = useSelector((state) => state.AuthReducer.userLoggin)

  return (
    <>
      {showAt === 'APP' ? (
        // <ButtonBase sx={{ borderRadius: '5px', overflow: 'hidden' }}>
        <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
          <Avatar
            src={userLoggin?.images?.avatar?.url}
            sx={{
              ...theme.typography.commonAvatar,
              ...theme.typography.mediumAvatar,
              margin: '8px 0 8px 8px !important',
              transition: 'all .2s ease-in-out',
              background: theme.palette.secondary.light,
              color: theme.palette.secondary.dark,
              cursor: 'pointer',
            }}
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            color="inherit"
            onClick={handleToggle}
          // variant="rounded"
          />
        </StyledBadge>
      ) : (
        // </ButtonBase>
        <Chip
          sx={{
            height: '48px',
            alignItems: 'center',
            borderRadius: '27px',
            transition: 'all .2s ease-in-out',
            borderColor: theme.palette.primary.light,
            backgroundColor: theme.palette.primary.light,
            '&[aria-controls="menu-list-grow"], &:hover': {
              borderColor: theme.palette.primary.main,
              background: `${theme.palette.primary.main}!important`,
              color: theme.palette.primary.light,
              '& svg': {
                stroke: theme.palette.primary.light,
              },
            },
            '& .MuiChip-label': {
              lineHeight: 0,
            },
          }}
          icon={
            <Avatar
              src={userLoggin?.images?.avatar?.url}
              sx={{
                ...theme.typography.mediumAvatar,
                margin: '8px 0 8px 8px !important',
                cursor: 'pointer',
              }}
              ref={anchorRef}
              aria-controls={open ? 'menu-list-grow' : undefined}
              aria-haspopup="true"
              color="inherit"
            />
          }
          label={<IconSettings stroke={1.5} size="1.5rem" color={theme.palette.primary.main} />}
          variant="outlined"
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          color="primary"
        />
      )}
      <Popper
        sx={{ zIndex: 999 }}
        placement="bottom-end"
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 14],
              },
            },
          ],
        }}
      >
        {({ TransitionProps }) => (
          <Transitions in={open} {...TransitionProps}>
            <Paper >
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard border={false} elevation={16} content={false} boxShadow shadow={theme.shadows[16]}>
                  <Box sx={{ p: 2 }}>
                    <Stack>
                      <Stack direction="row" spacing={0.5} alignItems="center">
                        <Typography variant="h4">Hello,</Typography>
                        {
                          (Object.entries(userLoggin).length === 0)
                            ?
                            <Typography component="span" variant="h4" sx={{ fontWeight: 400 }}>
                              Guest
                            </Typography>
                            :
                            <Typography component="span" variant="h4" sx={{ fontWeight: 400 }}>
                              {userLoggin?.displayName}
                            </Typography>
                        }
                      </Stack>
                    </Stack>
                    <OutlinedInput
                      sx={{ width: '100%', pr: 1, pl: 2, my: 2 }}
                      id="input-search-profile"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      onClick={() => toast.warning('Chức năng đang cập nhật!', toastConfig)}
                      placeholder="Tìm kiếm tùy chọn hồ sơ!"
                      startAdornment={
                        <InputAdornment position="start">
                          <IconSearch stroke={1.5} size="1rem" color={theme.palette.grey[500]} />
                        </InputAdornment>
                      }
                      aria-describedby="search-helper-text"
                      inputProps={{
                        'aria-label': 'weight',
                      }}
                    />
                    {/* <Divider /> */}
                  </Box>
                  <PerfectScrollbar style={{ height: '100%', maxHeight: 'calc(100vh - 250px)', overflowX: 'hidden' }}>
                    <Box sx={{ p: 2 }}>
                      <List
                        component="nav"
                        sx={{
                          width: '100%',
                          maxWidth: 350,
                          minWidth: 300,
                          backgroundColor: theme.palette.background.paper,
                          borderRadius: '10px',
                          [theme.breakpoints.down('md')]: {
                            minWidth: '100%',
                          },
                          '& .MuiListItemButton-root': {
                            mt: 0.5,
                          },
                        }}
                      >

                        <ListItemButton
                          sx={{ borderRadius: `${customization.borderRadius}px` }}
                          selected={selectedIndex === 0}
                          onClick={() => toast.warning('Chức năng đang cập nhật!', toastConfig)}
                        >
                          <ListItemIcon>
                            <IconSettings stroke={1.5} size="1.3rem" />
                          </ListItemIcon>
                          <ListItemText primary={<Typography variant="body2">Cài đặt tài khoản</Typography>} />
                        </ListItemButton>
                        {
                          (window.location.pathname.includes('/admin') === true)
                            ?
                            <>
                              <ListItemButton sx={{ borderRadius: `${customization.borderRadius}px` }} selected={selectedIndex === 2} onClick={handleLogout}>
                                <ListItemIcon>
                                  <IconLogout stroke={1.5} size="1.3rem" />
                                </ListItemIcon>
                                <ListItemText primary={<Typography variant="body2">Đăng xuất</Typography>} />
                              </ListItemButton>
                            </>
                            : (userLoggin?.roles?.filter((item) => { return item.name === 'Admin' || item.name === 'Moderator' }).length !== 0 && (Object.entries(userLoggin).length !== 0))
                              ?
                              <>
                                <ListItemButton sx={{ borderRadius: `${customization.borderRadius}px` }} selected={selectedIndex === 1} onClick={() => handleToAdmin()}>
                                  <ListItemIcon>
                                    <IconDeviceAnalytics stroke={1.5} size="1.3rem" />
                                  </ListItemIcon>
                                  <ListItemText primary={<Typography variant="body2">Đến trang Admin</Typography>} />
                                </ListItemButton>
                                <ListItemButton sx={{ borderRadius: `${customization.borderRadius}px` }} selected={selectedIndex === 2} onClick={handleLogout}>
                                  <ListItemIcon>
                                    <IconLogout stroke={1.5} size="1.3rem" />
                                  </ListItemIcon>
                                  <ListItemText primary={<Typography variant="body2">Đăng xuất</Typography>} />
                                </ListItemButton>
                              </>
                              : (Object.entries(userLoggin).length === 0)
                                ? <React.Fragment />
                                :
                                <>
                                  <ListItemButton sx={{ borderRadius: `${customization.borderRadius}px` }} selected={selectedIndex === 2} onClick={handleLogout}>
                                    <ListItemIcon>
                                      <IconLogout stroke={1.5} size="1.3rem" />
                                    </ListItemIcon>
                                    <ListItemText primary={<Typography variant="body2">Đăng xuất</Typography>} />
                                  </ListItemButton>
                                </>

                        }
                      </List>
                    </Box>
                  </PerfectScrollbar>
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </>
  );
};

export default ProfileSection;
