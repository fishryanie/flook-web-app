import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import {
  DataGrid,
  GridColumns,
  GridToolbarExport,
  GridToolbarContainer,
  GridToolbarFilterButton,
  GridToolbarColumnsButton,
  GridToolbarDensitySelector,
} from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { StyledGridOverlay } from '../Assets/Theme/AppStyle';
import actionTypes from '../Store/Actions/constants'
import Action from '../Store/Actions';
import { toast } from 'react-toastify';
import { toastConfig } from '../Functions/toast';


interface TableProps {
  title: string;
  array: any;
  columns: GridColumns;
}


const TableCustom: React.FC<TableProps> = props => {
  const { title, array, columns } = props;
  const stylesTable = { height: '100%', width: '100%', backgroundColor: 'white', borderRadius: '10px' }
  const [selectionRow, setSelectionModel] = useState([]);

  array?.forEach((item: any, i: number) => (item.id = i + 1));

  return (
    <Box sx={stylesTable}>
      <DataGrid
        rows={array}
        columns={columns}
        checkboxSelection
        style={{ borderRadius: '10px' }}
        components={{ Toolbar, NoRowsOverlay }}
        componentsProps={{ toolbar: { selectionRow, title } }}
        experimentalFeatures={{ newEditingApi: true }}
        onSelectionModelChange={(ids) => setSelectionModel(array.filter((row: { id: any }) => new Set(ids).has(row.id)))}
      />
    </Box>
  );
};


type toolbarProps = {
  selectionRow: any, title: string
}

const Toolbar: React.FC<toolbarProps> = (props) => {
  const { selectionRow, title } = props
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const dispatch = useDispatch()

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDialog = () => {
    dispatch({ type: actionTypes.openDialog, payload: { typeDialog: 'FORM_CREATE' } })
  }
  const handleDeleteMany = () => {
    let description = '', listDelete: Array<{ _id: string }> = []
    selectionRow.forEach((row: any) => {
      listDelete.push(row._id.toString())

      switch (title) {
        case 'Người Dùng':
          return description += row.displayName + ', '

        case 'Truyện Tranh':
          return description += row.title + ', '

        case 'Vai Trò' || 'Thể Loại' || 'Tác Giả' || 'Chapter':
          return description += row.name + ', '

        case 'Review Data' || 'Comment Data':
          return description += row.ebooks.title + ', '

        default: break;
      }
    })
    selectionRow.length > 0 && dispatch({
      type: actionTypes.openAccetp, payload: {
        title: 'Just Checking...',
        content: ' Are you sure delete ' + title,
        description: description,

        handleYes: () => {
          switch (title) {
            case 'Người Dùng':
              return dispatch(Action.auth.RemoveManyUser(listDelete))

            case 'Vai Trò':
              return dispatch(Action.auth.RemoveManyRole(listDelete))

            case 'Truyện Tranh':
              return dispatch(Action.app.removeManyEbook(listDelete))

            case 'Tác Giả':
              return dispatch(Action.app.removeManyAuthor(listDelete))

            case 'Thể Loại':
              return dispatch(Action.app.removeManyGenre(listDelete))

            case 'Chapter':
              return dispatch(Action.app.removeManyChapter(listDelete))

            case 'Review Data':
              return dispatch(Action.app.removeManyReview(listDelete))

            case 'Comment Data':
              return dispatch(Action.app.removeManyComment(listDelete))

            default: break;
          }
        }

      }
    })
  }

  return (
    <GridToolbarContainer sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box sx={{ m: 1 }}>
        <GridToolbarColumnsButton sx={{ mr: 2, color: theme.palette.secondary.dark }} />
        <GridToolbarFilterButton sx={{ mr: 2, color: theme.palette.secondary.dark }} />
        <GridToolbarDensitySelector sx={{ mr: 2, color: theme.palette.secondary.dark }} />
        <GridToolbarExport sx={{ mr: 2, color: theme.palette.secondary.dark }} />
      </Box>
      <Box sx={{ m: 1, display: 'flex', alignSelf: 'center', justifyContent: 'flex-end' }}>
        <Tooltip title="Table settings">
          <IconButton onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <MoreVertSharpIcon />
          </IconButton>
        </Tooltip>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          {
            (title === "Review Data" || title === "Comment Data")
              ? <React.Fragment />
              :
              <MenuItem onClick={handleDialog}>
                <ListItemIcon>
                  <AddIcon fontSize="small" />
                </ListItemIcon>
                Thêm {title}
              </MenuItem>
          }
          <MenuItem onClick={handleDeleteMany}>
            <ListItemIcon>
              <DeleteOutlineIcon fontSize="small" />
            </ListItemIcon>
            Xóa nhiều
          </MenuItem>
          <MenuItem onClick={() => toast.warning('Chức năng đang cập nhật!', toastConfig)}>
            <ListItemIcon>
              <MoreHorizIcon fontSize="small" />
            </ListItemIcon>
            Thêm
          </MenuItem>
        </Menu>
      </Box>
    </GridToolbarContainer>
  );
}

const NoRowsOverlay: React.FC = () => {
  return (
    <StyledGridOverlay>
      <svg width="120" height="100" viewBox="0 0 184 152" aria-hidden focusable="false">
        <g fill="none" fillRule="evenodd">
          <g transform="translate(24 31.67)">
            <ellipse className="ant-empty-img-5" cx="67.797" cy="106.89" rx="67.797" ry="12.668" />
            <path className="ant-empty-img-1" d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z" />
            <path className="ant-empty-img-2" d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z" />
            <path className="ant-empty-img-3" d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z" />
          </g>
          <path className="ant-empty-img-3" d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z" />
          <g className="ant-empty-img-4" transform="translate(149.65 15.383)">
            <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815" />
            <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" />
          </g>
        </g>
      </svg>
      <Box sx={{ mt: 1 }}>Không có dữ liệu</Box>
    </StyledGridOverlay>
  );
}


export default TableCustom;