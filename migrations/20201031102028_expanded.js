
exports.up = function(knex) {
    return knex.schema.table("locations", function(table) {
        table.text("storetype");

        table.text("amenitiesAndServices");

        table.text("restaurants");
      });
};

exports.down = function(knex) {
    return knex.schema.table("locations", function(table) {
        table.dropColumn("storetype");

        table.dropColumn("amenitiesAndServices");

        table.dropColumn("restaurants");
      });
};
