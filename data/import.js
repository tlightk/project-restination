const fs = require("fs");
const db = require("../server/knex.js");

async function seeder() {
  try {
    const locations = JSON.parse(fs.readFileSync("data/locations.json"));
    for (const location of locations) {
      const id = location.Site.SiteId;
      const latitude = location.Site.Latitude;
      const longitude = location.Site.Longitude;
      const name = location.Site.SiteName;

      const result = await db("newlocations").insert({
        id,
        latitude,
        longitude,
        name,
      });
      console.log("RESULT", result);
    }
  } catch (err) {
    console.error("Error inserting records", err);
  }
}

module.exports = seeder;
