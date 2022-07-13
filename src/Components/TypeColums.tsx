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
import { useDispatch } from "react-redux";
import { store } from '../Store/store';
import actionTypes from '../Store/Actions/constants';
import Action from '../Store/Actions';

const handleDelete = (row: any, table: string) => () => {
  store.dispatch({
    type: actionTypes.openAccetp, payload: {
      title: 'Just Checking...',
      content: `Delete one ${row?.name || row?.title || row?.displayName || row?.ebooks?.title} `,
      description: `Are you sure you want to delete ${row?.name || row?.title || row?.displayName || row?.ebooks?.title}`,

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
          // case 'reviews':
          //   return store.dispatch(Action.app.deletedGenre((row._id).toString()))
          // case 'comments':
          //   return store.dispatch(Action.app.deletedChapter((row._id).toString()))
          default: break;
        }
      }

    }
  })

};

const showInfoRow = (row: GridRowParams) => () => {
  store.dispatch({ type: 'infoRowTable', payload: row })
  store.dispatch({ type: actionTypes.openDialog })
  // store.dispatch({})
};

const columAction = (type: string, table: string) => ({
  width: 120,
  headerName: '##',
  field: 'actions',
  type: 'actions',
  getActions: (params: GridRowParams) => [
    <GridActionsCellItem label="isActive" sx={{ m: 0, p: 0 }} icon={type === 'eye'
      ? <VisibilityIcon onClick={showInfoRow(params.row)} />
      : <Stack direction="row" spacing={1} alignItems="center">
        <AntSwitch defaultChecked={params.row.isActive ? true : false} inputProps={{ 'aria-label': 'ant design' }} />
      </Stack>
    } />,
    <GridActionsCellItem label="Update" sx={{ m: 0, p: 0 }} icon={<SettingsOutlinedIcon sx={{ m: 0, p: 0 }} />} />,
    <GridActionsCellItem label="Delete" sx={{ m: 0, p: 0 }} icon={<DeleteOutlineOutlinedIcon sx={{ m: 0, p: 0 }} />} onClick={handleDelete(params.row, table)} />,
  ],
})




// 
// ========================== Info table ====================================>>>
export const columnsUsers: any = [
  { width: 100, editable: true, hide: true, field: "id", headerName: "Stt" },
  { width: 120, editable: true, field: "images", headerName: "Avatar", renderCell: (params: any) => params?.row?.images?.avata?.url === '' ? <IconPhoto /> : <Avatar src={params?.row?.images?.avata?.url} alt='images user' /> },
  { width: 200, editable: false, field: "email", headerName: "Email" },
  { width: 170, editable: true, field: "displayName", headerName: "DisplayName" },
  { width: 150, editable: false, field: "userName", headerName: "UserName" },
  { width: 150, editable: false, hide: true, field: "password", headerName: "Mật khẩu" },
  { width: 170, editable: false, field: "phoneNumber", headerName: "Phone Number" },
  { width: 220, editable: false, field: "roles", headerName: "Roles", renderCell: (params: any) => params.row.roles.map((item: any) => item.name).join(", ") },
  // { width: 150, editable: false, field: "deleted", headerName: "Deleted" },
  { ...columAction('isactive', 'users') }
]

export const columnRole: any = [
  { width: 100, editable: false, hide: true, field: 'id', headerName: 'Stt' },
  { width: 120, editable: false, field: 'name', headerName: 'Name' },
  { width: 400, editable: false, field: 'description', headerName: 'Description' },
  { ...columAction('eye', 'roles') },
];

export const columnsEbooks: any = [
  { width: 100, editable: true, hide: true, field: "id", headerName: "Stt" },
  { width: 100, editable: true, field: "images", headerName: "Background", renderCell: (params: any) => params?.row?.images?.background?.url === '' ? <IconPhoto /> : <Avatar src={params?.row?.images?.background?.url} alt='images manga' /> },
  { width: 220, editable: false, field: "title", headerName: "Title" },
  { width: 150, editable: true, field: "authors", headerName: "Tác giả", renderCell: (params: any) => params?.row?.authors?.map((item: any) => item.name).join(", ") },
  { width: 250, editable: false, field: "genres", headerName: "Thể loại", renderCell: (params: any) => params?.row?.genres?.map((item: any) => item.name).join(", ") },
  { width: 150, editable: false, field: "status", headerName: "Trạng thái" },
  { width: 350, editable: false, field: "description", headerName: "Giới thiệu" },
  { width: 120, editable: false, field: "numChapters", headerName: "Số chapter" },
  { width: 120, editable: false, field: "view", headerName: "Lượt đọc" },
  { width: 120, editable: false, field: "vip", headerName: "Vip" },
  // { width: 120, editable: false, field: "deleted", headerName: "Trạng thái xóa" },
  { ...columAction('eye', 'ebooks') }
]

export const columnsGenres: any = [
  { width: 100, editable: true, hide: true, field: "id", headerName: "Stt" },
  // { width: 120, editable: true, field: "images", headerName: "Avatar", renderCell: (params: any) => params.row.images.wallPaper === '' ? <IconPhoto/> : <Avatar src={'https://nhadat24h.com/uploads/bds/201904/14/926145_083922_4.jpg'} alt='images user'/>},
  { width: 200, editable: false, field: "name", headerName: "Tên loại" },
  { ...columAction('eye', 'genres') }
]

export const columnsAuthors: any = [
  { width: 100, editable: true, hide: true, field: "id", headerName: "Stt" },
  { width: 120, editable: true, field: "images", headerName: "Avatar", renderCell: (params: any) => params?.row?.images?.avata?.url === '' ? <IconPhoto /> : <Avatar src={params?.row?.images?.avata?.url} alt='images' /> },
  { width: 200, editable: false, field: "name", headerName: "Tên" },
  { width: 200, editable: false, field: "license", headerName: "License", renderCell: (params: any) => (params?.row?.license) === '' ? 'Null' : params?.row?.license?.displayName },
  { ...columAction('eye', 'authors') }
]

export const columnsChapters: any = [
  { width: 100, editable: true, hide: true, field: "id", headerName: "Stt" },
  // { width: 120, editable: true, field: "images", headerName: "Avatar", renderCell: (params: any) => params.row.images.wallPaper === '' ? <IconPhoto/> : <Avatar src={'https://nhadat24h.com/uploads/bds/201904/14/926145_083922_4.jpg'} alt='images user'/>},
  { width: 150, editable: false, field: "name", headerName: "Tên" },
  { width: 200, editable: true, field: "ebooks", headerName: "Truyện", renderCell: (params: any) => params.row.ebooks?.title },
  { width: 150, editable: false, field: "numViews", headerName: "Lượt đọc" },
  { width: 150, editable: false, field: "status", headerName: "Trạng thái" },
  { width: 150, editable: false, field: "numLikes", headerName: "Lượt thích", renderCell: (params: any) => params.row?.numLikes?.map((item: any) => item?.displayName).join(", ") },

  { ...columAction('eye', 'chapters') }
]

// ========================== Info review ====================================>>>

export const columnsReviews: any = [
  { width: 100, editable: true, hide: true, field: "id", headerName: "Stt" },
  // { width: 120, editable: true, field: "images", headerName: "Avatar", renderCell: (params: any) => params.row.images.wallPaper === '' ? <IconPhoto/> : <Avatar src={'https://nhadat24h.com/uploads/bds/201904/14/926145_083922_4.jpg'} alt='images user'/>},
  { width: 150, editable: false, field: "users", headerName: "Người dùng", renderCell: (params: any) => params.row.users?.displayName },
  { width: 250, editable: true, field: "ebooks", headerName: "Truyện", renderCell: (params: any) => params.row.ebooks?.title },
  { width: 150, editable: false, field: "rating", headerName: "Đánh giá" },
  { width: 400, editable: false, field: "content", headerName: "Nội dung" },

  { ...columAction('eye', 'reviews') }
]

export const columnsComments: any = [
  { width: 100, editable: true, hide: true, field: "id", headerName: "Stt" },
  // { width: 120, editable: true, field: "images", headerName: "Avatar", renderCell: (params: any) => params.row.images.wallPaper === '' ? <IconPhoto/> : <Avatar src={'https://nhadat24h.com/uploads/bds/201904/14/926145_083922_4.jpg'} alt='images user'/>},
  { width: 200, editable: false, field: "userId", headerName: "Người dùng", renderCell: (params: any) => params?.row?.userId?.username},
  // { width: 200, editable: true, field: "bookId", headerName: "Truyện", renderCell: (params: any) => params.row.bookId?.map((item: any) => item.title).join(", ") },
  { width: 250, editable: false, field: "content", headerName: "Nội dung" },
  // { width: 150, editable: false, field: "reviewId", headerName: "Review", renderCell: (params: any) => params?.row?.reviewId?.content},
  // { width: 150, editable: false, field: "chapterId", headerName: "Chapter", renderCell: (params: any) => params?.row?.chapterId?.name },

  { ...columAction('eye', 'comments') }
]

// ========================== Info other ====================================>>>
export const columnsCategories: any = [
  { width: 100, editable: true, hide: true, field: "id", headerName: "Stt" },
  // { width: 120, editable: true, field: "images", headerName: "Avatar", renderCell: (params: any) => params.row.images.wallPaper === '' ? <IconPhoto/> : <Avatar src={'https://nhadat24h.com/uploads/bds/201904/14/926145_083922_4.jpg'} alt='images user'/>},
  { width: 200, editable: false, field: "name", headerName: "Tên" },
  { ...columAction }
]

export const columnsStatus: any = [
  { width: 100, editable: true, hide: true, field: "id", headerName: "Stt" },
  // { width: 120, editable: true, field: "images", headerName: "Avatar", renderCell: (params: any) => params.row.images.wallPaper === '' ? <IconPhoto/> : <Avatar src={'https://nhadat24h.com/uploads/bds/201904/14/926145_083922_4.jpg'} alt='images user'/>},
  { width: 200, editable: false, field: "name", headerName: "Tên" },
  { ...columAction }
]