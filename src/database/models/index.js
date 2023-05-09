import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();
const DATABASE_URL = process.env.DB;

if (!DATABASE_URL) {
  console.log(DATABASE_URL)
  throw new Error('Please provide a valid database URL');
}
else{
  console.log("✅  Connected to database successfully")
}

const sequelize = new Sequelize(DATABASE_URL, {
  dialect: 'postgres',
  ssl: true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

export default sequelize;
