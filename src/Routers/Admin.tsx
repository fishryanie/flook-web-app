import { lazy } from 'react';
import namePage from '../Constants/NamePage';
import AdminPage from '../Pages/Admin';
import Loadable from '../Components/Loadable'

const Dashboard = Loadable(lazy(() => import('../Pages/Admin/Views/Dashboard')));
const UserData = Loadable(lazy(() => import('../Pages/Admin/Views/Auth/UserData')))
const RoleData = Loadable(lazy(() => import('../Pages/Admin/Views/Auth/RoleData')))

interface AdminRouter {
  path: string;
  element: JSX.Element,
  children: {
    path: string;
    element: JSX.Element,
  }[]
} 

const AdminRouter: AdminRouter = { 
  path: namePage.admin, 
  element: <AdminPage/>,
  children: [
    { path: namePage.admin, element: <Dashboard /> },
    { path: namePage.dashboard, element: <Dashboard /> },
    { path: '/admin/table/role', element: <RoleData /> },
    { path: namePage.tableAuth, element: <UserData /> },
  ]
}


export default AdminRouter;