import { DataTypes, Model } from 'sequelize';
import sequelize from './index.js';
import Year from './Years.js';
import Indicator from './Indicators.js';

class Percentage extends Model {}

Percentage.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  value: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  yearId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Year,
      key: 'id',
    }},
    IndicatorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Indicator,
          key: 'id',
        }}
}, {
  sequelize,
  modelName: 'Percentage',
  tableName: 'percentages',
  timestamps: true,
  underscored: true,
});

Percentage.belongsTo(Year, { foreignKey: 'yearId' });
Year.hasMany(Percentage, { foreignKey: 'yearId' });

Percentage.belongsTo(Indicator, { foreignKey: 'IndicatorId' });
Indicator.hasMany(Percentage, { foreignKey: 'IndicatorId' });

export default Percentage;
