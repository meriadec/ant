import path from 'path'

const env = process.env.NODE_ENV || 'development'

export default {

  env,
  port: 3052,

  assetsFolder: path.join(__dirname, './assets'),
  distFolder: path.join(__dirname, '../dist'),

}
