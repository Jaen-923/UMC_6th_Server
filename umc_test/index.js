import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './src/config/database.js'; // src 디렉토리 기준으로 경로 수정
import storeRoutes from './src/routes/storeRoutes.js'; // src 디렉토리 기준으로 경로 수정

const app = express();
const PORT = process.env.PORT || 3000;

// 미들웨어 설정
app.use(bodyParser.json()); // JSON 파싱을 위한 미들웨어 설정

// 라우터 설정
app.use('/api/store', storeRoutes);

// 기본 경로 처리
app.get('/', (req, res) => {
  res.send('서버가 정상적으로 실행 중입니다.');
});

// 데이터베이스 연결 및 서버 시작
sequelize
  .sync() // Sequelize를 사용하여 데이터베이스와 연결 및 동기화
  .then(() => {
    console.log('데이터베이스 연결 성공');
    app.listen(PORT, () => {
      console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
    });
  })
  .catch((error) => {
    console.error('데이터베이스 연결 실패:', error);
  });
