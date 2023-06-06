import { DataTypes, Model } from 'sequelize';
import sequelize from './index.js';

class Year extends Model {}

Year.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
}, {
  sequelize,
  modelName: 'Year',
  tableName: 'years',
  timestamps: true,
  underscored: true,
});

export default Year;
