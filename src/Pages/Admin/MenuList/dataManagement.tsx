import namePage from '../../../Constants/NamePage';
import { 
  IconDatabase, 
  IconUserCircle, 
  IconNotebook, 
  IconBook, 
  IconFileInfo, 
  IconLicense,
  IconBell,
  IconUserSearch,
  IconUser,
  IconList,
  IconBoxMultiple,
  IconFolders,
  IconLayout, IconBuildingStore, IconPresentation, IconHierarchy, IconBrandAirtable
} from '@tabler/icons';


// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

// you can add element "target: true" if you want open new tab into browser

const types = { item: 'item', group: 'group', collapse: 'collapse' }

const users = [
  {
    id: 'id-user',
    title: 'User',
    // caption: 'Người dùng',
    url: '/table/auth',
    type: types.item, icon: IconUser, breadcrumbs: false,
  },
  {
    id: 'id-role',
    title: 'Roles',
    // caption: 'Vai trò',
    url: '/table/books/default',
    type: types.item, icon: IconUserSearch, breadcrumbs: false,
  },
  {
    id: 'id-notify',
    title: 'Notify',
    // caption: 'Thông báo',
    url: '/table/books/default',
    type: types.item, icon: IconBell, breadcrumbs: false,
  },
 
]

const books = [
  {
    id: 'id-books-default',
    title: 'Ebooks',
    type: types.item,
    url: '/table/books/default',
    icon: IconBook, breadcrumbs: false,
  },
  {
    id: 'id-books-author',
    title: 'Authors',
    type: types.item,
    url: '/table/books/authors',
    icon: IconLicense, breadcrumbs: false,
  },
  {
    id: 'id-books-genres',
    title: 'Genres',
    type: types.item,
    url: namePage.chapters, icon: IconList, breadcrumbs: false,
  },
  {
    id: 'id-books-chapter',
    title: 'Chapters',
    type: types.item,
    url: namePage.chapters, icon: IconBoxMultiple, breadcrumbs: false,
  },  
]

const others = [
  {
    id: 'id-other-categories',
    title: 'Categories',
    type: types.item,
    url: namePage.chapters, icon: IconLayout, breadcrumbs: false,
  },
  {
    id: 'id-other-status',
    title: 'Status',
    type: types.item,
    url: namePage.chapters, icon: IconHierarchy, breadcrumbs: false,
  },
  {
    id: 'id-other-shopitem',
    title: 'Shop Item',
    type: types.item,
    url: namePage.chapters, icon: IconBuildingStore, breadcrumbs: false,
  },
  {
    id: 'id-other-forums',
    title: 'Forums',
    type: types.item,
    url: namePage.chapters, icon: IconBrandAirtable, breadcrumbs: false,
  },
  {
    id: 'id-other-topic',
    title: 'Topic',
    type: types.item,
    url: namePage.chapters, icon: IconPresentation, breadcrumbs: false,
  },
  
]

const colections = [
  {
    id: 'id-colections',
    title: 'Collection',
    type: types.collapse, icon: IconDatabase,
    children: [
      {
        id: 'id-colections-auth',
        title: 'Auth',
        url: '/colections/auth',
        type: types.collapse, icon: IconUserCircle, breadcrumbs: false,
        children: [...users]
      },
      {
        id: 'id-colections-ebooks',
        title: 'Books',
        url: '/colections/books',
        type: types.collapse, icon: IconNotebook, breadcrumbs: false,
        children: [...books]
      },
      {
        id: 'id-colections-others',
        title: 'Others',
        url: '/colections/books',
        type: types.collapse, icon: IconFolders, breadcrumbs: false,
        children: [...others]
      },
    ],
  }
]


const dataManagement = {
  id: 'id-managements-data',
  title: 'Data management',
  // caption: 'Quản lý dữ liệu',
  type: types.group,
  children: [...colections],
};


export default dataManagement