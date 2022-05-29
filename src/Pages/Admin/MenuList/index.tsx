import apiKey from './apiKey';
import approve from './approve'
import contacts from './contact';
import dashboard from './dashboard';
import dataManagement from './dataManagement';
import authorization from './authorization';

// ==============================|| MENU ITEMS ||============================== //


const menuItems = { 
    items: [dashboard, dataManagement, authorization, contacts, approve, apiKey]
};

export default menuItems;
