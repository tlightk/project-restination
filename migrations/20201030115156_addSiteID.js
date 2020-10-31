exports.up = function(knex) {
  return knex.schema.table("locations", function(table) {
    table.integer("siteid").notNullable().unique();
  });
};

exports.down = function(knex) {
  return knex.schema.table("locations", function(table) {
    table.dropColumn("siteid");
  });
};
