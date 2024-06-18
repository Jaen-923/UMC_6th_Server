// models/memberMission.js

import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const member_mission = sequelize.define('member_mission', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  member_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  mission_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('ongoing', 'completed', 'failed'),
    allowNull: false,
    defaultValue: 'ongoing'
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
  tableName: 'member_mission'
});

export default member_mission;

