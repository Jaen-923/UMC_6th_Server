// controllers/storeController.js

// 가게에 리뷰 추가하기 API
export const addReview = async (req, res) => {
  const { storeId, memberId, body, score } = req.body;

  try {
    // 가게 존재 여부 확인
    const storeExists = await storeService.checkStoreExists(storeId);
    if (!storeExists) {
      return res.status(404).json({
        status: 'error',
        message: '해당 가게를 찾을 수 없습니다.'
      });
    }

    // 리뷰 추가
    await Review.create({
      member_id: memberId,
      store_id: storeId,
      body,
      score
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

// 가게의 미션을 도전 중인 미션에 추가(API)
export const addMissionChallenge = async (req, res) => {
  const { storeId, memberId, missionId } = req.body;

  try {
    // 가게 존재 여부 확인
    const storeExists = await storeService.checkStoreExists(storeId);
    if (!storeExists) {
      return res.status(404).json({
        status: 'error',
        message: '해당 가게를 찾을 수 없습니다.'
      });
    }

    // 도전 중인 미션 여부 확인
    const alreadyChallenged = await storeService.checkMissionAlreadyChallenged(memberId, missionId);
    if (alreadyChallenged) {
      return res.status(400).json({
        status: 'error',
        message: '이미 도전 중인 미션입니다.'
      });
    }

    // 미션 도전 추가
    await MemberMission.create({
      member_id: memberId,
      mission_id: missionId,
      status: 'ongoing'
    });

    res.json({
      status: 'success',
      message: '미션 도전이 성공적으로 추가되었습니다.'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'error',
      message: '서버 오류입니다. 관리자에게 문의하세요.'
    });
  }
};
