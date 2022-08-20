import { lazy, useEffect } from 'react';
import namePage from '../Constants/NamePage';
import AdminPage from '../Pages/Admin';
import Loadable from '../Components/Loadable';

const Dashboard = Loadable(lazy(() => import('../Pages/Admin/Views/Dashboard')));
const UserData = Loadable(lazy(() => import('../Pages/Admin/Views/Auth/UserData')));
const RoleData = Loadable(lazy(() => import('../Pages/Admin/Views/Auth/RoleData')));
const AuthorData = Loadable(lazy(() => import('../Pages/Admin/Views/Books/AuthorData')));
const GenreData = Loadable(lazy(() => import('../Pages/Admin/Views/Books/GenreData')));
const EbookData = Loadable(lazy(() => import('../Pages/Admin/Views/Books/EbookData')));
const ChapterData = Loadable(lazy(() => import('../Pages/Admin/Views/Books/ChapterData')));
const CategoriesData = Loadable(lazy(() => import('../Pages/Admin/Views/Books/ChapterData')));
const StatusData = Loadable(lazy(() => import('../Pages/Admin/Views/Books/ChapterData')));
const CommentData = Loadable(lazy(() => import('../Pages/Admin/Views/Reviews/CommentData')));
const ReviewData = Loadable(lazy(() => import('../Pages/Admin/Views/Reviews/ReviewData')));

interface AdminRouterModel {
  path: string;
  element: JSX.Element,
  children: {
    path: string;
    element: JSX.Element,
  }[]
} 

const AdminRouter: AdminRouterModel = { 
  path: namePage.admin, 
  element: <AdminPage/>,
  children: [
    { path: namePage.admin, element: <Dashboard /> },
    { path: namePage.dashboard, element: <Dashboard /> },
    { path: '/admin/table/role', element: <RoleData /> },
    { path: namePage.tableAuth, element: <UserData /> },
    { path: namePage.tableAuthor, element: <AuthorData /> },
    { path: namePage.tableGenre, element: <GenreData /> },
    { path: namePage.tableEbook, element: <EbookData /> },
    { path: namePage.tableChapter, element: <ChapterData /> },
    { path: '/admin/table/reviews/comment', element: <CommentData /> },
    { path: '/admin/table/reviews/review', element: <ReviewData /> },
    { path: '/admin/table/others/categories', element: <CategoriesData /> },
    { path: '/admin/table/others/status', element: <StatusData /> },
  ]
}


export default AdminRouter;