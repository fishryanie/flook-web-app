import namePage from '../../../Constants/NamePage';
import {
  IconDatabase,
  IconUserCircle,
  IconNotebook,
  IconBook,
  IconLicense,
  IconBell,
  IconUserSearch,
  IconUser,
  IconList,
  IconBoxMultiple,
  IconFolders,
  IconLayout, IconBuildingStore, IconPresentation, IconHierarchy, IconBrandAirtable, IconMessages, IconMessage2, IconNotes
} from '@tabler/icons';


// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

// you can add element "target: true" if you want open new tab into browser

const types = { item: 'item', group: 'group', collapse: 'collapse' }

const users = [
  {
    id: 'id-user',
    title: 'Người dùng',
    // caption: 'Người dùng',
    url: '/table/auth',
    type: types.item, icon: IconUser, breadcrumbs: false,
  },
  {
    id: 'id-role',
    title: 'Vai trò',
    // caption: 'Vai trò',
    url: '/table/role',
    type: types.item, icon: IconUserSearch, breadcrumbs: false,
  },
  {
    id: 'id-notify',
    title: 'Thông báo',
    // caption: 'Thông báo',
    url: '/table/books/default',
    type: types.item, icon: IconBell, breadcrumbs: false,
  },

]

const books = [
  {
    id: 'id-books-ebook',
    title: 'Truyện tranh',
    type: types.item,
    url: '/table/books/ebooks',
    icon: IconBook, breadcrumbs: false,
  },
  {
    id: 'id-books-author',
    title: 'Tác giả',
    type: types.item,
    url: '/table/books/authors',
    icon: IconLicense, breadcrumbs: false,
  },
  {
    id: 'id-books-genres',
    title: 'Thể loại',
    type: types.item,
    url: '/table/books/genres', icon: IconList, breadcrumbs: false,
  },
  {
    id: 'id-books-chapter',
    title: 'Chapters',
    type: types.item,
    url: '/table/books/chapters', icon: IconBoxMultiple, breadcrumbs: false,
  },
]

const reviews = [
  {
    id: 'id-reviews-review',
    title: 'Đánh giá',
    type: types.item,
    url: '/table/reviews/review',
    icon: IconNotes, breadcrumbs: false,
  },
  {
    id: 'id-reviews-comment',
    title: 'Bình luận',
    type: types.item,
    url: '/table/reviews/comment',
    icon: IconMessage2, breadcrumbs: false,
  },
]

const others = [
  {
    id: 'id-other-categories',
    title: 'Categories',
    type: types.item,
    url: namePage.error, icon: IconLayout, breadcrumbs: false,
  },
  {
    id: 'id-other-status',
    title: 'Status',
    type: types.item,
    url: namePage.error, icon: IconHierarchy, breadcrumbs: false,
  },
  {
    id: 'id-other-shopitem',
    title: 'Shop Item',
    type: types.item,
    url: namePage.error, icon: IconBuildingStore, breadcrumbs: false,
  },
  {
    id: 'id-other-forums',
    title: 'Forums',
    type: types.item,
    url: namePage.error, icon: IconBrandAirtable, breadcrumbs: false,
  },
  {
    id: 'id-other-topic',
    title: 'Topic',
    type: types.item,
    url: namePage.error, icon: IconPresentation, breadcrumbs: false,
  },

]

const colections = [
  {
    id: 'id-colections',
    title: 'Bộ Dữ Liệu',
    type: types.collapse, icon: IconDatabase,
    children: [
      {
        id: 'id-colections-auth',
        title: 'Người dùng',
        url: '/colections/auth',
        type: types.collapse, icon: IconUserCircle, breadcrumbs: false,
        children: [...users]
      },
      {
        id: 'id-colections-ebooks',
        title: 'Truyện',
        url: '/colections/books',
        type: types.collapse, icon: IconNotebook, breadcrumbs: false,
        children: [...books]
      },
      {
        id: 'id-colections-reviews',
        title: 'Đánh Giá',
        url: '/colections/reviews',
        type: types.collapse, icon: IconMessages, breadcrumbs: false,
        children: [...reviews]
      },
      {
        id: 'id-colections-others',
        title: 'Thêm',
        url: '/colections/books',
        type: types.collapse, icon: IconFolders, breadcrumbs: false,
        children: [...others]
      },
    ],
  }
]


const dataManagement = {
  id: 'id-managements-data',
  title: 'Quản lý dữ liệu',
  // caption: 'Quản lý dữ liệu',
  type: types.group,
  children: [...colections],
};


export default dataManagement