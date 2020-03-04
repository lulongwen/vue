'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ENV_CONFIG:'"development"',
  // 开发 API
  API_ROOT: '"https://dev-qxapi.heqiauto.com"'
})
