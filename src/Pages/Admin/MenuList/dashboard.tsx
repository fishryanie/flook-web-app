import { IconDashboard } from '@tabler/icons';


// constant
const types = { item: 'item', group: 'group', collapse: 'collapse' }

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'id-dashboard',
  title: 'Thống kê',
  // caption: 'Thống kê',
	type: types.group,
  children: [
    {
      id: 'default',
      title: 'Thống kê',
      type: types.item,
      url: '/dashboard',
      icon: IconDashboard,
      breadcrumbs: false,
    },
  ],
};

export default dashboard;
