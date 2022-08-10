import { IconMessageCircle, IconMessage2 } from '@tabler/icons';

const types = { item: 'item', group: 'group', collapse: 'collapse' }

const contact = {
  id: 'id-contact',
  title: 'Liên Hệ',
  // caption: 'Liên hệ',
  type: types.group,
  children: [
    {
      id: 'id-chat',
      title: 'Tin Nhắn',
      type: types.item, 
      icon: IconMessageCircle,
    },
    {
      id: 'id-feedback',
      title: 'Nhận Xét',
      type: types.item, 
      icon: IconMessage2,
    },
  ],
};


export default contact