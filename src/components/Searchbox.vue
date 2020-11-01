<template>
  <div class="searchbox-container">
    <Locations />
    <Services />
    <Amenities />
    <Restaurants />
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
}
</style>
