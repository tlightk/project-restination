<template>
  <div class="searchbox-container">
    <div id="filters">
      <h1 id='serviceTitle'>Filter for the services below:</h1>
      <!-- <Locations /> -->
      <Services />
      <Amenities />
      <Restaurants />
    </div>
  </div>
</template>

<script>
import Locations from "./Locations";
import Services from "./Services";
import Amenities from "./Amenities";
import Restaurants from "./Restaurants";

export default {
  name: "searchbox",
  components: {
    Locations,
    Services,
    Amenities,
    Restaurants,
  },
  mounted() {
    this.getAllMarkers();
  },
  methods: {
    async getAllMarkers() {
      await this.$store.dispatch("resetMarkers");
    },
  },
};
</script>

<style>
.searchbox-container {
  margin: 60px;
  display: flex;
  justify-content: center;
}


#filters {
  background-color:#DBF5FF;
}

</style>
