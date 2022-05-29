import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { 
  DataGrid,
  GridColumns,
  GridRowModel,
  GridRowsProp,
  GridToolbarExport,
  GridToolbarContainer,
  GridToolbarFilterButton,
  GridToolbarColumnsButton,
  GridToolbarDensitySelector,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector 
  
} from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import Pagination from '@mui/material/Pagination';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from "@mui/material/Typography";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

import { StyledGridOverlay } from '../Assets/Theme/AppStyle';
import actionTypes from '../Store/Actions/constants'
import Snackbar from '@mui/material/Snackbar';
import Alert, { AlertProps } from '@mui/material/Alert';
interface TableProps {
  title: string
  array: GridRowsProp;
  columns: GridColumns;
}


const TableCustom: React.FC<TableProps> = props => {
  const { title, array, columns } = props;
  const stylesTable = { height: '100%', width: '100%', backgroundColor: 'white', borderRadius:'10px' }
  const [selectionRow, setSelectionModel] = useState([]);

  array?.forEach((item: any, i:number) => (item.id = i + 1));




  return (
    <Box sx={stylesTable}>
      <DataGrid
        rows={array}
        columns={columns}
        checkboxSelection
        style={{borderRadius:'10px'}}
        components={{ Toolbar, Footer, NoRowsOverlay }}
        componentsProps={{ footer: {selectionRow}}}
        experimentalFeatures={{ newEditingApi: true }}
        onSelectionModelChange={(ids) => setSelectionModel([].filter((row: {id: string}) => new Set(ids).has(row.id)))}
      />

    </Box>
  );
};



const Toolbar: React.FC = () => {
  const theme = useTheme();
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton sx={{mr:2, color: theme.palette.secondary.dark}}/>
      <GridToolbarFilterButton sx={{mr:2, color: theme.palette.secondary.dark}}/>
      <GridToolbarDensitySelector sx={{mr:2, color: theme.palette.secondary.dark}}/>
      <GridToolbarExport sx={{mr:2, color: theme.palette.secondary.dark}}/>
    </GridToolbarContainer>
  );
}

const Footer: React.FC = () => {
  const theme = useTheme();
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  const dispatch = useDispatch()
  const openDialog = () => {
    dispatch({type: actionTypes.openDialog})
  }
  return (
    <Grid container sx={{borderTop: '1px solid rgba(224, 224, 224, 1)' }}>
      <Grid item xs={12} sm={6} sx={{alignSelf: 'center'}}>
        <ButtonBase  onClick={openDialog} sx={{
          borderRadius: '16px', 
          padding: '10px',
          margin: '10px',
          color: theme.palette.secondary.dark,
          cursor: 'pointer',
          background: theme.palette.secondary.light,
          transition: 'all .2s ease-in-out',
            '&[aria-controls="menu-list-grow"],&:hover': {
              background: theme.palette.secondary.dark,
              color: theme.palette.secondary.light,
            },
         
        }}>
        <AddCircleOutlineOutlinedIcon sx={{mr:1}} fontSize='small'/>
        <Typography>Create User</Typography>
      </ButtonBase>
        
        
        {/* <CustomButton title='Delete Many' openNote={openNote} handleTooltipOpen={handleTooltipOpen} handleTooltipClose={handleTooltipClose} Component={<DeleteOutlineOutlinedIcon sx={{mr:1}} fontSize='small'/>}/> */}
      </Grid>
      <Grid item xs={12} sm={6} sx={{display:'flex', alignSelf: 'center', justifyContent: 'flex-end'}}>
        <Pagination
          color="primary"
          count={pageCount}
          page={page + 1}
          onChange={(event, value) => apiRef.current.setPage(value - 1)}
        />
      </Grid>
    </Grid>
  );
}

const NoRowsOverlay: React.FC = () =>{
  return (
    <StyledGridOverlay>
      <svg width="120" height="100" viewBox="0 0 184 152" aria-hidden focusable="false">
        <g fill="none" fillRule="evenodd">
          <g transform="translate(24 31.67)">
            <ellipse className="ant-empty-img-5" cx="67.797" cy="106.89" rx="67.797" ry="12.668"/>
            <path className="ant-empty-img-1" d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"/>
            <path className="ant-empty-img-2" d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"/>
            <path className="ant-empty-img-3" d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"/>
          </g>
          <path className="ant-empty-img-3" d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"/>
          <g className="ant-empty-img-4" transform="translate(149.65 15.383)">
            <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815" />
            <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" />
          </g>
        </g>
      </svg>
      <Box sx={{ mt: 1 }}>No Rows</Box>
    </StyledGridOverlay>
  );
}


export default TableCustom;
