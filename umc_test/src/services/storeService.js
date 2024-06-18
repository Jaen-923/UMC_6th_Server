// services/storeService.js

import Store from '../models/store.js'; // 예시로 store.js 파일을 import하도록 변경 필요
import MemberMission from '../models/memberMission.js'; // 실제 파일명에 맞게 수정 필요

export const checkStoreExists = async (storeId) => {
  const store = await Store.findByPk(storeId);
  return store ? true : false;
};

export const checkMissionAlreadyChallenged = async (memberId, missionId) => {
  const existingMission = await MemberMission.findOne({
    where: {
      member_id: memberId,
      mission_id: missionId,
      status: 'ongoing'
    }
  });
  return existingMission ? true : false;
};
