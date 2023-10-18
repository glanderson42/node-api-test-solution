const convict = require('convict');
require('dotenv').config();

const config = convict({
  env: {
    doc: 'Environment',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  },
  port: {
    doc: 'Port',
    format: 'port',
    default: 3000,
    env: 'NODE_PORT'
  },
});

module.exports = config;
