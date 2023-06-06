import dotenv from 'dotenv';
import express from 'express';
import sequelize from './database/models/index.js';
import userRoutes from './routes/UserRoutes.js';
import bodyParser from 'body-parser';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerOptions from './swagger/swaggerOptions.js';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', userRoutes);

const specs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(port, () => {
  console.log(`👂 App listening on port ${port}`);
});

sequelize
  .sync()
  .then(() => {
    console.log('✅ Database is synced.');
  })
  .catch((err) => {
    console.error('❌ Unable to sync database:', err);
  });
