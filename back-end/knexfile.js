// Update with your config settings.
require('dotenv').config();

module.exports = {
    test: {
      client: 'pg',
      connection: {
        database: 'postgres',
        user:     'postgres',
        password: 'postgres'
      },
      migrations: {
        directory: __dirname + '/db/migrations'
      },
      seeds: {
        directory: __dirname + '/db/seeds/test'
      }
    },
    development: {
      client: 'pg',
      connection: {
        database: 'postgres',
        user:     'postgres',
        password: 'postgres'
      },
      migrations: {
        directory: __dirname + '/db/migrations'
      },
      seeds: {
        directory: __dirname + '/db/seeds/development'
      }
    },
    production: {
      client: 'pg',
      connection: process.env.DATABASE_URL,
      migrations: {
        directory: __dirname + '/db/migrations'
      },
      seeds: {
        directory: __dirname + '/db/seeds/production'
      }
    }
  };