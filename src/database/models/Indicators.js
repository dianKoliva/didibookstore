import { DataTypes, Model } from 'sequelize';
import sequelize from './index.js';

class Indicator extends Model {}

Indicator.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
}, {
  sequelize,
  modelName: 'Indicator',
  tableName: 'indicators',
  timestamps: true,
  underscored: true,
});

export default Indicator;
