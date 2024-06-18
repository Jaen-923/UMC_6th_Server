// dbSeeder.js

import sequelize from '/Users/ogjaeeun/2024_dev/UMC_6th_Server/umc_test/src/config/database.js';
import store from '/Users/ogjaeeun/2024_dev/UMC_6th_Server/umc_test/src/models/store.js'; // 모델 파일 경로에 맞게 수정
import review from '/Users/ogjaeeun/2024_dev/UMC_6th_Server/umc_test/src/models/review.js'; // 모델 파일 경로에 맞게 수정
import member_mission from '/Users/ogjaeeun/2024_dev/UMC_6th_Server/umc_test/src/models/memberMission.js'; // 모델 파일 경로에 맞게 수정
import mission from '/Users/ogjaeeun/2024_dev/UMC_6th_Server/umc_test/src/models/mission.js'; //
import region from '/Users/ogjaeeun/2024_dev/UMC_6th_Server/umc_test/src/models/region.js'; // 모델 파일 경로에 맞게 수정
// import member from '../src/models/member.js'; // 추가: 멤버 모델 파일 경로에 맞게 수정

const seedDatabase = async () => {
  try {
    // 데이터베이스 연결
    await sequelize.authenticate();
    console.log('데이터베이스 연결 성공');

    // 외래 키 제약 조건 비활성화
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');

    // 모든 테이블 삭제
    await review.drop();
    await store.drop();
    await mission.drop();
    await region.drop();
    await member_mission.drop()

    // 외래 키 제약 조건 활성화
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');

    await sequelize.sync({ force: true });

    // Region 데이터 삽입
    await region.bulkCreate([
      { id: 1, name: '지역1' },
      { id: 2, name: '지역2' }
    ]); 
    

    // Store 테이블에 더미 데이터 삽입
    await store.bulkCreate([
      { id: 1,region_id: 1, name: '가게1', address: '주소1', score: 4.5 },
      { id: 2,region_id: 2, name: '가게2', address: '주소2', score: 4.0 },
      { id: 3 ,region_id: 1, name: '가게3', address: '주소3', score: 3.8 }
    ]);

    // Review 테이블에 더미 데이터 삽입
    await review.bulkCreate([
      { id:1 ,member_id: 1, store_id: 1, body: '좋은 가게입니다.', score: 5 },
      { id:2, member_id: 2, store_id: 1, body: '별로에요.', score: 2 },
      { id:3, member_id: 3, store_id: 2, body: '괜찮은 곳이에요.', score: 4 }
    ]);

    // Mission 테이블에 더미 데이터 삽입
    await mission.bulkCreate([
      { id:1, store_id: 1, reward: 5, mission_spec: '특정 물품 구매하기', created_at: new Date(), updated_at: new Date() },
      { id:2, store_id: 2, reward: 15, mission_spec: '특정 이벤트 참여하기', created_at: new Date(), updated_at: new Date() }
    ]);

    // MemberMission 테이블에 더미 데이터 삽입
    await member_mission.bulkCreate([
      { id:1, member_id: 1, mission_id: 1, status: 'ongoing', created_at: new Date(), updated_at: new Date() },
      { id:2, member_id: 2, mission_id: 2, status: 'completed', created_at: new Date(), updated_at: new Date() }
    ]);

    // // Member 테이블에 더미 데이터 삽입
    // await member.bulkCreate([
    //   {
    //     name: '홍길동',
    //     gender: '남성',
    //     age: 30,
    //     address: '서울특별시 강남구',
    //     spec_address: '강남대로 123번길 45-6',
    //     status: 'active',
    //     inactive_date: null,
    //     social_type: 'kakao',
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //     point: 1000
    //   },
    //   {
    //     name: '김영희',
    //     gender: '여성',
    //     age: 25,
    //     address: '경기도 수원시',
    //     spec_address: '수원로 456번길 78-9',
    //     status: 'active',
    //     inactive_date: null,
    //     social_type: 'google',
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //     point: 800
    //   }
    // ]);

    console.log('더미 데이터 삽입 완료');
  } catch (error) {
    console.error('데이터베이스 연결 실패:', error);
  } finally {
    // 데이터베이스 연결 종료
    await sequelize.close();
    console.log('데이터베이스 연결 종료');
  }
};

seedDatabase(); // 함수 호출
