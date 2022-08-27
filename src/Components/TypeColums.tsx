import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { GridActionsCellItem, GridRowId, GridRowParams, GridColumns } from '@mui/x-data-grid-pro';
import { AntSwitch } from '../Assets/Theme/AppStyle';
import { IconPhoto } from '@tabler/icons';
import { store } from '../Store/store';
import Rating from '@mui/material/Rating';
import actionTypes from '../Store/Actions/constants';
import Action from '../Store/Actions';

const handleDelete = (row: any, table: string) => () => {
  store.dispatch({
    type: actionTypes.openAccetp, payload: {
      title: 'Just Checking...',
      content: `Delete one ${row?.name || row?.title || row?.displayName || row?.ebooks?.title || row?.content} `,
      description: `Are you sure you want to delete ${row?.name || row?.title || row?.displayName || row?.ebooks?.title || row?.content}`,

      handleYes: () => {
        switch (table) {
          case 'roles':
            return store.dispatch(Action.auth.RemoveOneRole((row._id).toString()))
          case 'users':
            return store.dispatch(Action.auth.RemoveOneUser((row._id).toString()))
          case 'ebooks':
            return store.dispatch(Action.app.removeOneEbook((row._id).toString()))
          case 'authors':
            return store.dispatch(Action.app.removeOneAuthor((row._id).toString()))
          case 'genres':
            return store.dispatch(Action.app.removeOneGenre((row._id).toString()))
          case 'chapters':
            return store.dispatch(Action.app.removeOneChapter((row._id).toString()))
          case 'reviews':
            return store.dispatch(Action.app.removeOneReview((row._id).toString()))
          case 'comments':
            return store.dispatch(Action.app.removeOneComment((row._id).toString()))
          default: break;
        }
      }

    }
  })

};

const showInfoRow = (row: GridRowParams) => () => {
  store.dispatch({ type: 'infoRowTable', payload: row })
  store.dispatch({ type: actionTypes.openDialog })
};

const columAction = (type: string, table: string) => ({
  width: 120,
  headerName: '##',
  field: 'actions',
  type: 'actions',
  getActions: (params: GridRowParams) => [
    <GridActionsCellItem label="isActive" sx={{ m: 0, p: 0 }} icon={type === 'eye'
      ? <VisibilityIcon  onClick={showInfoRow(params.row)}/>
      : type === 'isActive'
        ? <Stack direction="row" spacing={1} alignItems="center">
          <AntSwitch checked={(params.row.isActive === true) ? true : false} disabled inputProps={{ 'aria-label': 'ant design' }} />
        </Stack>
        : <React.Fragment/>
    } />,
    <GridActionsCellItem label="Update" sx={{ m: 0, p: 0 }} icon={type === 'null' ? <React.Fragment/> : <SettingsOutlinedIcon sx={{ m: 0, p: 0 }} />} onClick={showInfoRow(params.row)} />,
    <GridActionsCellItem label="Delete" sx={{ m: 0, p: 0 }} icon={<DeleteOutlineOutlinedIcon sx={{ m: 0, p: 0 }} />} onClick={handleDelete(params.row, table)} />,
  ],
})




// 
// ========================== Info table ====================================>>>
export const columnsUsers: any = [
  { width: 100, editable: true, hide: true, field: "id", headerName: "Stt" },
  { width: 120, editable: true, field: "images", headerName: "Avatar", renderCell: (params: any) => params?.row?.images?.avatar?.url === '' ? <IconPhoto /> : <Avatar src={params?.row?.images?.avatar?.url} alt='images user' /> },
  { width: 200, editable: false, field: "email", headerName: "Email" },
  { width: 170, editable: true, field: "displayName", headerName: "Tên hiển thị" },
  { width: 150, editable: false, field: "username", headerName: "Tên đăng nhập" },
  { width: 150, editable: false, hide: true, field: "password", headerName: "Mật khẩu" },
  { width: 170, editable: false, field: "phoneNumber", headerName: "Số điện thoại" },
  { width: 220, editable: false, field: "roles", headerName: "Vai trò", renderCell: (params: any) => params.row.roles.map((item: any) => item.name).join(", ") },
  { ...columAction('isActive', 'users') }
]

export const columnRole: any = [
  { width: 100, editable: false, hide: true, field: 'id', headerName: 'Stt' },
  { width: 120, editable: false, field: 'name', headerName: 'Tên' },
  { width: 400, editable: false, field: 'description', headerName: 'Mô tả' },
  { ...columAction('', 'roles') },
];

export const columnsEbooks: any = [
  { width: 100, editable: true, hide: true, field: "id", headerName: "Stt" },
  { width: 100, editable: true, field: "images", headerName: "Background", renderCell: (params: any) => params?.row?.images?.background?.url === '' ? <IconPhoto /> : <Avatar src={params?.row?.images?.background?.url} alt='images manga' /> },
  { width: 220, editable: false, field: "title", headerName: "Tên truyện" },
  { width: 250, editable: true, field: "authors", headerName: "Tác giả", renderCell: (params: any) => params?.row?.authors?.map((item: any) => item.name).join(", ") },
  { width: 250, editable: false, field: "genres", headerName: "Thể loại", renderCell: (params: any) => params?.row?.genres?.map((item: any) => item.name).join(", ") },
  { width: 150, editable: false, field: "status", headerName: "Trạng thái" },
  { width: 350, editable: false, field: "description", headerName: "Giới thiệu" },
  { width: 120, editable: false, field: "numChapters", headerName: "Số chapter" },
  { width: 120, editable: false, field: "views", headerName: "Lượt đọc" },
  { width: 120, editable: false, field: "vip", headerName: "Vip" },
  { ...columAction('', 'ebooks') }
]

export const columnsGenres: any = [
  { width: 100, editable: true, hide: true, field: "id", headerName: "Stt" },
  { width: 200, editable: false, field: "name", headerName: "Tên loại" },
  { ...columAction('', 'genres') }
]

export const columnsAuthors: any = [
  { width: 100, editable: true, hide: true, field: "id", headerName: "Stt" },
  { width: 120, editable: true, field: "images", headerName: "Avatar", renderCell: (params: any) => params?.row?.images?.avatar?.url === '' ? <IconPhoto /> : <Avatar src={params?.row?.images?.avatar?.url} alt='images' /> },
  { width: 200, editable: false, field: "name", headerName: "Tên" },
  { width: 200, editable: false, field: "license", headerName: "License", renderCell: (params: any) => (params?.row?.license) === '' ? 'Null' : params?.row?.license?.displayName },
  { ...columAction('', 'authors') }
]

export const columnsChapters: any = [
  { width: 100, editable: true, hide: true, field: "id", headerName: "Stt" },
  { width: 150, editable: false, field: "name", headerName: "Tên" },
  { width: 200, editable: true, field: "ebooks", headerName: "Truyện", renderCell: (params: any) => params.row.ebooks?.title },
  { width: 150, editable: false, field: "views", headerName: "Lượt đọc" },
  { width: 150, editable: false, field: "status", headerName: "Trạng thái" },
  { width: 150, editable: false, field: "likes", headerName: "Lượt thích", renderCell: (params: any) => params.row?.likes?.map((item: any) => item?.displayName).join(", ") },

  { ...columAction('', 'chapters') }
]

// ========================== Info review ====================================>>>

export const columnsReviews: any = [
  { width: 100, editable: true, hide: true, field: "id", headerName: "Stt" },
  { width: 150, editable: false, field: "users", headerName: "Người dùng", renderCell: (params: any) => params.row.users?.displayName },
  { width: 250, editable: true, field: "ebooks", headerName: "Truyện", renderCell: (params: any) => params.row.ebooks?.title },
  { width: 200, editable: false, field: "rating", headerName: "Đánh giá", renderCell: (params: any) => params.row.rating === '' ? 0 : <Rating name="read-only" value={params.row.rating} readOnly precision={0.5}/> },
  { width: 400, editable: false, field: "content", headerName: "Nội dung" },

  { ...columAction('null', 'reviews') }
]

export const columnsComments: any = [
  { width: 100, editable: true, hide: true, field: "id", headerName: "Stt" },
  { width: 200, editable: false, field: "userId", headerName: "Người dùng", renderCell: (params: any) => params?.row?.userId?.username },
  { width: 250, editable: false, field: "content", headerName: "Nội dung" },

  { ...columAction('null', 'comments') }
]

// ========================== Info other ====================================>>>
export const columnsCategories: any = [
  { width: 100, editable: true, hide: true, field: "id", headerName: "Stt" },
  { width: 200, editable: false, field: "name", headerName: "Tên" },
  { ...columAction }
]

export const columnsStatus: any = [
  { width: 100, editable: true, hide: true, field: "id", headerName: "Stt" },
  { width: 200, editable: false, field: "name", headerName: "Tên" },
  { ...columAction }
]