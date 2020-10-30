<template>
  <div class="searchbox-container">
    <Locations />
    <Services />
    <Types />
    <Amenities />
    <Restaurants />
  </div>
</template>

<script>
import Locations from "./Locations";
import Services from "./Services";
import Types from "./Types";
import Amenities from "./Amenities";
import Restaurants from "./Restaurants";

export default {
  name: "searchbox",
  components: {
    Locations,
    Services,
    Types,
    Amenities,
    Restaurants,
  },
};
</script>

<style>
.searchbox-container {
  margin: 60px;
}
</style>
