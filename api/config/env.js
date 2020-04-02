const dotenv = require('dotenv-safe')
const { join } = require('path')

const env = process.env.ENV_VARS || process.env.NODE_ENV || 'development'

dotenv.config({
  path: join(__dirname, 'env', `.env.${env}`),
})

module.exports = {
  appName: process.env.APP_NAME,
  env,
  secrets: {
    jwt: process.env.JWT_SECRET,
    encryptionKey: process.env.ENCRYPTION_KEY,
    encryptionVector: process.env.ENCRYPTION_VECTOR,
    salt: process.env.PASSWORD_SALT,
  },

  db: {
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      host: process.env.POSTGRES_HOST,
      port: process.env.PORT,
      dialect: 'postgres',
  },
}
