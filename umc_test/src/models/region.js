// models/region.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const region = sequelize.define('region', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'region'
});

export default region;
