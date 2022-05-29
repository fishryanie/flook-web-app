import { IconDatabase, IconMessageCircle, IconListCheck } from '@tabler/icons';

const types = { item: 'item', group: 'group', collapse: 'collapse' }

const contact = {
  id: 'id-contact',
  title: 'Contacts',
  // caption: 'Liên hệ',
  type: types.group,
  children: [
    {
      id: 'id-chat',
      title: 'Chat',
      type: types.item, 
      icon: IconMessageCircle,
    },
    {
      id: 'id-feedback',
      title: 'Feedback',
      type: types.item, 
      icon: IconListCheck,
    },
  ],
};


export default contact