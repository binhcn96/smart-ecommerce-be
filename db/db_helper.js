const knex = require('knex')({ client: 'mysql' });
const config = require('./knexfile');

const db_helper = knex(config.development);

module.exports = db_helper;
