const fs = require("fs");
const db = require("../server/knex.js");

async function seeder() {
  try {
    const locations = JSON.parse(fs.readFileSync("data/locations.json"));
    for (const location of locations) {
      const siteid = location.Site.SiteId;
      const latitude = location.Site.Latitude;
      const longitude = location.Site.Longitude;
      const name = location.Site.SiteName;
      const state = location.Addresses[0].State;
      const city = location.Addresses[0].City;
      const zip = location.Addresses[0].Zip;
      const highway = location.Site.Highway;
      const storetype = location.FacilitySubtype.Name;
      
      // amenities & services
      let amenitiesAndServices = '';
      
      // check custom fields and add amenity or service to variable string if available
      for (let element of location.CustomFields) {
        amenitiesAndServices += element.CustomField.Name + ', ';
      };

      // restaurants
      let restaurants = '';
      
      for(let element of location.Site.Concepts){
        restaurants += element.Concept.Name + ', ';
      };


      await db("locations").insert({
        siteid,
        latitude,
        longitude,
        name,
        state,
        city,
        zip,
        highway,
        storetype,
        amenitiesAndServices,
        restaurants,
      });
    }
  } catch (err) {
    console.error("Error inserting records", err);
  }
}

module.exports = seeder;
