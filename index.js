import app from './src/app.js';

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.HOST_PORT || 8000;

app.listen(PORT, HOST, () => {
  console.log('Listening on %s:%d...', HOST, PORT);
});
