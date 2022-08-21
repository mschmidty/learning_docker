// Update with your config settings.

const { POSTGRES_IP, POSTGRES_USER, POSTGRES_PASSWORD } = require("./config/config");

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */


module.exports = {

  development: {
      client: 'pg',
      connection: {
        host: POSTGRES_IP,
        database: 'deploy_test',
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD
      }
  }

  // development: {
  //   client: 'pg',
  //   connection: 'postgress://localhost/deploy_test'
  // },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
