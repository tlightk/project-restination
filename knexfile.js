// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "truckstop",
      user: "sivani",
    },
  },

  staging: {
    client: "pg",
    connection: {
      database: "truckstop",
      user: "sivani",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "locations",
    },
  },

  production: {
    client: "pg",
    connection: {
      database: "truckstop",
      user: "sivani",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
