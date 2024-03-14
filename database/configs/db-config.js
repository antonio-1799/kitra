const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  test: {
    dialect: 'sqlite',
    host: ':memory:',
  },
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_URL,
    dialect: process.env.DB_DIALECT,
    seederStorage: 'sequelize',
  },
};
