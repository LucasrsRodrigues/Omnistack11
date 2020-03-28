const knex = require('knex');
const config = require('../../knexfile');

const zone = process.env.NODE_ENV === 'test' ? config.test : config.development;


const connection = knex(zone);

module.exports = connection;