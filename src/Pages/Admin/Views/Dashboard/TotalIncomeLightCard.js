import { useTheme, styled } from '@mui/material/styles';
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import MainCard from '../../../../Components/cards/MainCard';
import TotalIncomeCard from '../../../../Components/cards/Skeleton/TotalIncomeCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Action from '../../../../Store/Actions';

// styles
const CardWrapper = styled(MainCard)(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(210.04deg, ${theme.palette.warning.dark} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
    borderRadius: '50%',
    top: -30,
    right: -180,
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(140.9deg, ${theme.palette.warning.dark} -14.02%, rgba(144, 202, 249, 0) 70.50%)`,
    borderRadius: '50%',
    top: -160,
    right: -130,
  },
}));

// ==============================|| DASHBOARD - TOTAL INCOME LIGHT CARD ||============================== //

const TotalIncomeLightCard = ({ isLoading }) => {
  const theme = useTheme();

  const dataEbook = useSelector((state) => state.BookReducer.listAllBook);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Action.app.findManyEbook());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <TotalIncomeCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 2 }}>
            <List sx={{ py: 0 }}>
              <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
                <ListItemAvatar>
                  <Avatar
                    variant="rounded"
                    sx={{
                      ...theme.typography.commonAvatar,
                      ...theme.typography.largeAvatar,
                      backgroundColor: theme.palette.warning.light,
                      color: theme.palette.warning.dark,
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-book" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
                      <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
                      <line x1="3" y1="6" x2="3" y2="19"></line>
                      <line x1="12" y1="6" x2="12" y2="19"></line>
                      <line x1="21" y1="6" x2="21" y2="19"></line>
                    </svg>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  sx={{
                    py: 0,
                    mt: 0.45,
                    mb: 0.45,
                  }}
                  primary={<Typography variant="h4">Tổng Truyện:</Typography>}
                  secondary={
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: theme.palette.grey[500],
                        mt: 0.5,
                      }}
                    >
                      {dataEbook.length}
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Box>
        </CardWrapper>
      )}
    </>
  );
};

TotalIncomeLightCard.propTypes = {
  isLoading: PropTypes.bool,
};

export default TotalIncomeLightCard;
