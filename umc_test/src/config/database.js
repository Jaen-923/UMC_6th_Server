import { Sequelize } from 'sequelize';

// Sequelize 객체 생성
const sequelize = new Sequelize({
  dialect: 'mariadb', // 사용할 데이터베이스 종류
  host: 'localhost', // 데이터베이스 호스트
  username: 'root', // 데이터베이스 사용자명
  password: 'Euni0923!', // 데이터베이스 비밀번호
  database: 'UMC_6th_DB', // 연결할 데이터베이스 이름
  port: 3306, // 데이터베이스 포트 (기본값)
  logging: false,
});

export default sequelize;

