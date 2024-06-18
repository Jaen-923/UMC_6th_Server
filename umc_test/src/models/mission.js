// models/mission.js

import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const mission = sequelize.define('mission', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  store_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  reward: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  mission_spec: {
    type: DataTypes.TEXT,
    allowNull: false
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
  tableName: 'mission'
});

export default mission;
