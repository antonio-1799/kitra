const app = require('./app');
const dotenv = require('dotenv');

dotenv.config();

const HOST = process.env.HOST || 'localhost';
const HOST_PORT = process.env.HOST_PORT || 5000;

app.listen(HOST_PORT, HOST, () => {
  console.log('Listening on %s:%d...', HOST, HOST_PORT);
});
