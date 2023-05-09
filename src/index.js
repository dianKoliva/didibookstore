import dotenv from 'dotenv';
import express from 'express'
import sequelize from './database/models/index.js';
dotenv.config();

const port = process.env.PORT || 3000;
const app = express()

app.listen(port, () => {
  console.log(`👂 App listening on port ${port}`)
})