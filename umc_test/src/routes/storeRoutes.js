// routes/storeRoutes.js

import express from 'express';
import { addReview, addMissionChallenge } from '../controllers/storeController.js';
import ReviewDTO from '../dto/ReviewDTO.js';
import MissionChallengeDTO from '../dto/MissionChallengeDTO.js';

const router = express.Router();

// 가게에 리뷰 추가하기 API
router.post('/reviews', async (req, res) => {
  try {
    // 요청 데이터의 유효성 검사
    const { error } = ReviewDTO.createReviewSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ status: 400, isSuccess: false, message: error.details[0].message });
    }

    // 유효성 검사 통과 후 컨트롤러로 요청 전달
    await addReview(req, res);
  } catch (error) {
    console.error('Error adding review:', error);
    res.status(500).json({ status: 500, isSuccess: false, message: '서버 오류, 관리자에게 문의 바랍니다.' });
  }
});

// 가게의 미션을 도전 중인 미션에 추가(API)
router.post('/missions/challenges', async (req, res) => {
  try {
    // 요청 데이터의 유효성 검사
    const { error } = MissionChallengeDTO.challengeMissionSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ status: 400, isSuccess: false, message: error.details[0].message });
    }

    // 유효성 검사 통과 후 컨트롤러로 요청 전달
    await addMissionChallenge(req, res);
  } catch (error) {
    console.error('Error adding mission challenge:', error);
    res.status(500).json({ status: 500, isSuccess: false, message: '서버 오류, 관리자에게 문의 바랍니다.' });
  }
});

export default router;
