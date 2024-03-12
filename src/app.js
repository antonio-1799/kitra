import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Health check API
app.get('/health', (req, res) => {
  res.send('This API is healthy!');
});

export default app;
