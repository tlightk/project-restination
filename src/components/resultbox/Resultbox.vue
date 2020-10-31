<template>
  <div id="Resultbox">
    <h1>We found these stores for you</h1>
    <div>
      <div
        class="singleResult"
        v-for="location in filteredLocations"
        v-bind:key="location.id"
      >
        Name: {{ location.name }} , State: {{ location.state }}, City:
        {{ location.city }}, Highway: {{ location.highway }}, Amenities &
        Services: {{ location.amenitiesAndServices }}, Restaurants:
        {{ location.restaurants }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Resultbox",
  mounted() {
    this.getLocations();
  },
  computed: {
    ...mapState(["locations", "filteredLocations"]),
  },
  methods: {
    async getLocations() {
      await this.$store.dispatch("loadLocations");
      await this.$store.dispatch("filterLocations");
      await this.$store.dispatch("filterMarkers");
    },
    accessAllStores() {
      return this.locations;
    },
  },
};
</script>

<style>
#Resultbox {
  font-size: 15px;
  background-color: rgb(241, 187, 255);
}

.singleResult {
  margin: 15px;
  background-color: rgb(235, 235, 235);
}
</style>
