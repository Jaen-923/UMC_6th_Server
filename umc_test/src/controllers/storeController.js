// controllers/storeController.js
import review from '../models/review.js'; // 상대 경로로 변경
import * as storeService from '../services/storeService.js'; // 상대 경로로 변경
import MemberMission from '../models/memberMission.js';
import Mission from '../models/mission.js'; 

// 가게에 리뷰 추가하기 API
export const addReview = async (req, res) => {
  const { id ,member_id, store_id, body, score } = req.body;

  try {
    // 가게 존재 여부 확인
    const storeExists = await storeService.checkStoreExists(store_id);
    if (!storeExists) {
      return res.status(404).json({
        status: 'error',
        message: '해당 가게를 찾을 수 없습니다.'
      });
    }

    // 리뷰 추가
    await review.create({
      id: id,
      store_id: store_id,
      member_id: member_id,
      body: body,
      score: score
    });

    res.json({
      status: 'success',
      message: '리뷰가 성공적으로 추가되었습니다.'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'error',
      message: '서버 오류입니다. 관리자에게 문의하세요.'
    });
  }
};

export const handleAddMissionChallenge = async (req, res) => {
  try {
    const { member_id, mission_id } = req.body;

    // 미션이 이미 도전 중인지 확인
    const alreadyChallenged = await checkMissionAlreadyChallenged(member_id, mission_id);
    if (alreadyChallenged) {
      return res.status(400).json({ status: 400, isSuccess: false, message: 'Mission already challenged by this member.' });
    }

    // 미션 정보 가져오기
    const mission = await getMissionByMissionId(mission_id);
    if (!mission) {
      return res.status(404).json({ status: 404, isSuccess: false, message: 'Mission not found.' });
    }

    // 미션 상태 확인 후 도전 중인 미션에 추가
    if (mission.status === 'ongoing') {
      const newMission = await addMissionChallenge(member_id, mission_id);
      return res.status(201).json({ status: 201, isSuccess: true, message: 'Mission challenge added successfully.', data: newMission });
    } else {
      return res.status(400).json({ status: 400, isSuccess: false, message: 'Mission is not currently available for challenge.' });
    }
  } catch (error) {
    console.error('Error adding mission challenge:', error);
    res.status(500).json({ status: 500, isSuccess: false, message: '서버 오류, 관리자에게 문의 바랍니다.' });
  }
};