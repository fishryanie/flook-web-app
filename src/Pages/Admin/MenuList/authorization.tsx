import { IconDatabase, IconMathFunction, IconUsers } from '@tabler/icons';

const types = { item: 'item', group: 'group', collapse: 'collapse' }


const authorization = {
  id: 'id-authorization',
  title: 'Authorization',
  // caption: 'Phân quyền',
  type: types.group,
  children: [
    {
      id: 'id-feature',
      title: 'Feature',
      type: types.item, 
      icon: IconMathFunction,
    },
    {
      id: 'id-account',
      title: 'Account',
      type: types.item, 
      icon: IconUsers,
    },
  ],
};


export default authorization