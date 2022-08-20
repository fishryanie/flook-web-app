import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, Grid, Typography } from '@mui/material';

// third-party
// project imports
import Action from '../../../../Store/Actions';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

// ===========================|| DASHBOARD DEFAULT - BAJAJ AREA CHART CARD ||=========================== //

const BajajAreaChartCard = (props) => {
  const theme = useTheme();
  const { value } = props;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Action.auth.NewMember(value));
  }, [dispatch, value]);

  const dataNewMember = useSelector((state) => state.AuthReducer.arrayNewMember);

  return (
    <Card sx={{ bgcolor: 'secondary.light' }}>
      <Grid container sx={{ p: 2, pb: 0, color: '#fff' }}>
        <Grid item xs={12}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.dark }}>

              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4" sx={{ color: theme.palette.grey[800] }}>
                {value === 'day' ? 'Hôm nay' : value === 'week' ? 'Tuần này' : value === 'month' ? 'Tháng này' : value === 'year' ? 'Năm này' : ''}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {
        dataNewMember.length === 0
          ?
          <Grid item align="center">
            <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.dark }}>
              Không có dữ liệu!
            </Typography>
          </Grid>
          :
          <AreaChart width={300} height={150} data={dataNewMember}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey={value === 'day' ? 'hour' : value === 'week' ? 'dayOfMonth' : value === 'month' ? 'week' : value === 'year' ? 'month' : ''} />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey={value === 'day' ? 'countUserInHour' : value === 'week' ? 'countUserInDate' : value === 'month' ? 'countUserInWeek' : value === 'year' ? 'countUserInMonth' : ''} stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          </AreaChart>
      }
    </Card>
  );
};

export default BajajAreaChartCard;
