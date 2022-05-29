import { IconDatabase, IconMicrophone, IconFileUpload } from '@tabler/icons';

const types = { item: 'item', group: 'group', collapse: 'collapse' }

const approve = {
  id: 'id-approve',
  title: 'Approve',
  // caption: 'Phê duyệt',
  type: types.group,
  children: [
    {
      id: 'id-apply',
      title: 'Apply',
      type: types.item, 
      icon: IconDatabase,
    },
    {
      id: 'id-feedback',
      title: 'Voices',
      type: types.item, 
      icon: IconMicrophone,
    },
    {
      id: 'id-post',
      title: 'Post',
      type: types.item, 
      icon: IconFileUpload,
    },
  ],
};


export default approve