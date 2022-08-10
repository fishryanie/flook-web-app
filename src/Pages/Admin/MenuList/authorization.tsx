import { IconToggleLeft, IconUsers } from '@tabler/icons';

const types = { item: 'item', group: 'group', collapse: 'collapse' }


const authorization = {
  id: 'id-authorization',
  title: 'Phân quyền',
  // caption: 'Phân quyền',
  type: types.group,
  children: [
    {
      id: 'id-feature',
      title: 'Quyền',
      type: types.item, 
      icon: IconToggleLeft,
    },
    {
      id: 'id-account',
      title: 'Tài Khoản',
      type: types.item, 
      icon: IconUsers,
    },
  ],
};


export default authorization