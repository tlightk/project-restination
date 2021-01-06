exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("locations")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("locations").insert([
        { latitude: "3.9", longitude: 4.7, name: "Best Truck Stop" },
        { latitude: "4.9", longitude: 43.7, name: "Best Country Store" },
        { latitude: "5.9", longitude: -95.7, name: "Best ???" },
        { latitude: "54.7", longitude: -95.7, name: "PLEASE ???" },
      ]);
    });
};
