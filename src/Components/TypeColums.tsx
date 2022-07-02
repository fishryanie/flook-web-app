import * as React from 'react';
import moment from "moment";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { GridActionsCellItem, GridRowId, GridRowParams, GridColumns } from '@mui/x-data-grid-pro';
import { AntSwitch } from '../Assets/Theme/AppStyle';
import { IconPhoto } from '@tabler/icons';
import { useDispatch } from 'react-redux';
import { store } from '../Store/store';
import actionTypes from '../Store/Actions/constants';


const handleDelete = (row: any, table: string) => () => {
  store.dispatch({type: actionTypes.openAccetp, payload: {
    title: 'Just Checking...',
    content: `Delete one ${row?.name} `,
    description: `Are you sure you want to delete ${row?.name}`,
    handleYes: () => {
      switch (table) {
        case 'roles':
          return store.dispatch({type: 'DELETE_ONE_ROLES', payload: row._id})
        case 'users':
          return store.dispatch({type: 'DELETE_ONE_USER', payload: row._id})
        case 'ebooks':
          return store.dispatch({type: 'DELETE_ONE_EBOOKS', payload: row._id})
        default: break;
      }
    }
  }})
};



const showInfoRow = (row: GridRowParams) => () => {
  store.dispatch({type: 'infoRowTable', payload: row})
  store.dispatch({type: actionTypes.openDialog})
  // store.dispatch({})
};


const columAction = (type: string, table: string) => ({
  width: 120,
  headerName: '##',
  field: 'actions',
  type: 'actions',
  getActions: (params: GridRowParams) => [
    <GridActionsCellItem label="isActive" sx={{ m: 0, p: 0 }} icon={ type === 'eye' 
    ? <VisibilityIcon onClick={showInfoRow(params.row)}/> 
    : <Stack direction="row" spacing={1} alignItems="center">
        <AntSwitch defaultChecked={params.row.isActive ? true : false} inputProps={{ 'aria-label': 'ant design' }} />
      </Stack>
    }/>,
    <GridActionsCellItem label="Update" sx={{ m: 0, p: 0 }} icon={<SettingsOutlinedIcon sx={{ m: 0, p: 0 }} />} />,
    <GridActionsCellItem label="Delete" sx={{ m: 0, p: 0 }} icon={<DeleteOutlineOutlinedIcon sx={{ m: 0, p: 0 }} />} onClick={handleDelete(params.row, table)}/>,
  ],
})



// ========================== Info table ====================================>>>

export const columnRole: any = [
  { width: 100, editable: false, hide: true, field: 'id', headerName: 'Stt' },
  { width: 120, editable: false, field: 'name', headerName: 'Name' },
  { width: 400, editable: false, field: 'description', headerName: 'Description' },
  {...columAction('eye', 'roles')},
];

export const columnsUsers: any = [
  { width: 100, editable: true, hide: true, field: "id", headerName: "Stt" },
  { width: 120, editable: true, field: "images", headerName: "Avatar", renderCell: (params: any) => params.row.images.wallPaper === '' ? <IconPhoto/> : <Avatar src={'https://nhadat24h.com/uploads/bds/201904/14/926145_083922_4.jpg'} alt='images user'/>},
  { width: 200, editable: false, field: "email", headerName: "Email" },
  { width: 170, editable: true, field: "displayName", headerName: "DisplayName" },
  { width: 150, editable: false, field: "userName", headerName: "UserName" },
  { width: 150, editable: false, hide: true, field: "password", headerName: "Mật khẩu" },
  { width: 170, editable: false, field: "phoneNumber", headerName: "Phone Number" },
  { width: 170, editable: false, field: "roles", headerName: "Roles", renderCell: (params: any) => params.row.roles.map((item: any) =>  item.name).join(", ")},
  {...columAction('isactive', 'users')}
]

 
