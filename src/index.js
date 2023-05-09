import dotenv from 'dotenv';
import express from 'express'
import sequelize from './database/models/index.js';
import userRoutes from "./routes/UserRoutes.js"
import bodyParser from 'body-parser';
dotenv.config();

const port = process.env.PORT || 3000;
const app = express()

// handle POST requests to /users
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/users/",userRoutes);
app.listen(port, () => {
  console.log(`👂 App listening on port ${port}`)
})
sequelize.sync().then(() => {
  console.log('✅Database is synced.');
}).catch((err) => {
  console.error('Unable to sync database:', err);
});