import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { gridSpacing } from '../../../../Constants/Theme';
import { Grid, MenuItem, TextField, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';
import MainCard from '../../../../Components/cards/MainCard';
import SkeletonTotalGrowthBarChart from '../../../../Components/cards/Skeleton/TotalGrowthBarChart';
import Action from '../../../../Store/Actions';

// ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||============================== //

const TotalGrowthBarChart = ({ isLoading }) => {
  const [value, setValue] = useState('hot');
  const theme = useTheme();
  const customization = useSelector(state => state.customizationReducer);

  const { navType } = customization;
  const { primary } = theme.palette.text;
  const darkLight = theme?.palette?.dark?.light;
  const grey200 = theme.palette.grey[200];
  const grey500 = theme.palette.grey[500];

  const primary200 = theme.palette.primary[200];
  const primaryDark = theme.palette.primary.dark;
  const secondaryMain = theme.palette.secondary.main;
  const secondaryLight = theme?.palette?.secondary?.light;

  const status = [
    {
      value: 'reader',
      label: 'Lượt đọc',
    },
    {
      value: 'score',
      label: 'Đánh giá',
    },
    {
      value: 'hot',
      label: 'Độ hot',
    },
    {
      value: 'subscribers',
      label: 'Theo dõi',
    },
  ];

  const data = {
    page: 1,
    sort: value,
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Action.app.searchEbook(data));
  }, [dispatch, value]);

  const dataBook = useSelector((state) => state.BookReducer.listBook);

  const newData = dataBook.map((item) => {
    item.title = item.title.slice(0, 7) + '...'
    return item
  })

  const titleData = [];
  const readerData = [];
  const avgScoreData = [];
  const sumHotData = [];
  const subscriberData = [];

  newData?.map((item) => {
    return titleData.push(item.title)
  } )

  newData?.map((item) => {
    return readerData.push(item.readers)
  } )

  newData?.map((item) => {
    return avgScoreData.push(item.avgScore)
  } )

  newData?.map((item) => {
    return sumHotData.push(item.sumHot)
  } )

  newData?.map((item) => {
    return subscriberData.push(item.subscribers)
  } )

  const chartData = {
    height: 480,
    type: 'bar',
    options: {
        chart: {
            id: 'bar-chart',
            stacked: true,
            toolbar: {
                show: true
            },
            zoom: {
                enabled: true
            }
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom',
                        offsetX: -10,
                        offsetY: 0
                    }
                }
            }
        ],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '50%'
            }
        },
        xaxis: {
            type: 'category',
            categories: titleData
        },
        legend: {
            show: true,
            fontSize: '14px',
            fontFamily: `'Roboto', sans-serif`,
            position: 'bottom',
            offsetX: 20,
            labels: {
                useSeriesColors: false
            },
            markers: {
                width: 16,
                height: 16,
                radius: 5
            },
            itemMargin: {
                horizontal: 15,
                vertical: 8
            }
        },
        fill: {
            type: 'solid'
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            show: true
        }
    },
    series: [
        {
            name: 'Lượt đọc',
            data: readerData
        },
        {
            name: 'Đánh giá',
            data: avgScoreData
        },
        {
            name: 'Theo dõi',
            data: subscriberData
        },
        {
            name: 'Độ hot',
            data: sumHotData
        }
    ]
};

  useEffect(() => {
    const newChartData = {
      ...chartData.options,
      colors: [primary200, primaryDark, secondaryMain, secondaryLight],
      xaxis: {
        labels: {
          style: {
            colors: [primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary],
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: [primary],
          },
        },
      },
      grid: {
        borderColor: grey200,
      },
      tooltip: {
        theme: 'light',
      },
      legend: {
        labels: {
          colors: grey500,
        },
      },
    };

    // do not load chart when loading
    if (!isLoading) {
      ApexCharts.exec(`bar-chart`, 'updateOptions', newChartData);
    }
  }, [navType, primary200, primaryDark, secondaryMain, secondaryLight, primary, darkLight, grey200, isLoading, grey500]);

  return (
    <>
      {isLoading ? (
        <SkeletonTotalGrowthBarChart />
      ) : (
        <MainCard>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                      <Typography variant="h3">Bảng xếp hạng</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <TextField id="standard-select-currency" select value={value} onChange={(e) => setValue(e.target.value)}>
                    {status.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Chart {...chartData} />
            </Grid>
          </Grid>
        </MainCard>
      )}
    </>
  );
};

TotalGrowthBarChart.propTypes = {
  isLoading: PropTypes.bool,
};

export default TotalGrowthBarChart;
