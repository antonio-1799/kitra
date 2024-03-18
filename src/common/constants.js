const SECRET_KEY = process.env.SECRET_KEY ?? 'secretKey123';
const TOKEN_EXPIRY = process.env.TOKEN_EXPIRY ?? '30m';

module.exports = { SECRET_KEY, TOKEN_EXPIRY };
