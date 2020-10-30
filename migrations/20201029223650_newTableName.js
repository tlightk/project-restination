exports.up = function(knex) {
  return knex.schema.hasTable("locations").then(function(exists) {
    if (!exists) {
      return knex.schema.createTable("locations", (table) => {
        table.increments().index();

        table.text("name").notNullable();

        table.float("latitude");

        table.float("longitude");

        table.text("state");

        table.text("city");

        table.text("zip");

        table.text("county");

        table.text("highway");
      });
    }
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTables("locations");
};
