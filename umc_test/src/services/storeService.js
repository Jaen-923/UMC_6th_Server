// services/storeService.js

import Store from '../models/store.js'; 
import MemberMission from '../models/memberMission.js';
import Mission from '../models/mission.js';

export const checkStoreExists = async (store_id) => {
  const store = await Store.findByPk(store_id);
  return store ? true : false;
};
