// models/store.js

import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const store = sequelize.define('store', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true, // 이 옵션을 추가해 primary key로 설정합니다.
    autoIncrement: true
  },
  region_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  score: {
    type: DataTypes.FLOAT,
    defaultValue: 0.0
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: false,
  tableName: 'store'
});

export default store;
