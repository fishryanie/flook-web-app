import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { gridSpacing } from '../../../../Constants/Theme';
import { Button, CardActions, CardContent, Divider, Grid, Menu, MenuItem, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import BajajAreaChartCard from './BajajAreaChartCard';
import MainCard from '../../../../Components/cards/MainCard';
import SkeletonPopularCard from '../../../../Components/cards/Skeleton/PopularCard';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { toast } from 'react-toastify';
import { toastConfig } from '../../../../Functions/toast';
import { useDispatch, useSelector } from 'react-redux';
import Action from '../../../../Store/Actions';
import moment from 'moment';

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const PopularCard = ({ isLoading }) => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [value, setValue] = useState('day');

  const status = [
    {
      value: 'day',
      label: 'Hôm nay',
    },
    {
      value: 'week',
      label: 'Tuần này',
    },
    {
      value: 'month',
      label: 'Tháng này',
    },
    {
      value: 'year',
      label: 'Năm này',
    },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Action.auth.NewMember(value));
  }, [dispatch, value]);

  const dataNewMember = useSelector((state) => state.AuthReducer.arrayNewMember);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {isLoading ? (
        <SkeletonPopularCard />
      ) : (
        <MainCard content={false}>
          <CardContent>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <Grid container alignContent="center" justifyContent="space-between">
                  <Grid item>
                    <Typography variant="h4">Thành viên mới:</Typography>
                  </Grid>
                  <Grid item>
                    <MoreHorizOutlinedIcon
                      fontSize="small"
                      sx={{
                        color: theme.palette.primary[200],
                        cursor: 'pointer',
                      }}
                      aria-controls="menu-popular-card"
                      aria-haspopup="true"
                      onClick={handleClick}
                    />
                    <Menu
                      id="menu-popular-card"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      variant="selectedMenu"
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                    >
                      {status.map((option) => (
                        <MenuItem key={option.value} value={option.value} onClick={() => { setValue(option.value); setAnchorEl(null); }}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sx={{ pt: '16px !important' }}>
                <BajajAreaChartCard value={value} />
              </Grid>

              {
                dataNewMember?.map((item, index) => {
                  return (
                    <Grid item xs={12} key={index}>
                      {
                        item?.nameUser?.map((item, index) => {
                          return (
                            <>
                              <Grid container direction="column" key={index}>
                                <Grid item>
                                  <Grid container alignItems="center" justifyContent="space-between">
                                    <Grid item>
                                      <Typography variant="subtitle1" color="inherit">
                                        Tên: {item?.displayName === null ? 'Vô danh' : item?.displayName}
                                      </Typography>
                                    </Grid>
                                  </Grid>
                                </Grid>
                                <Grid item>
                                  <Typography variant="subtitle2" sx={{ color: 'success.dark' }}>
                                    Ngày tham gia: {moment(item?.createAt).format('DD/MM/YYYY')}
                                  </Typography>
                                </Grid>
                              </Grid>
                              <Divider sx={{ my: 1.5 }} />
                            </>
                          );
                        })
                      }
                    </Grid>
                  )
                })
              }
            </Grid>
          </CardContent>
          <CardActions sx={{ p: 1.25, pt: 0, justifyContent: 'center' }}>
            <Button size="small" disableElevation onClick={() => toast.warning('Chức năng đang cập nhật!', toastConfig)}>
              View All
              <ChevronRightOutlinedIcon />
            </Button>
          </CardActions>
        </MainCard>
      )}
    </>
  );
};

PopularCard.propTypes = {
  isLoading: PropTypes.bool,
};

export default PopularCard;
