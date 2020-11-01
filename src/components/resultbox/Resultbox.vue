<template>
  <div id="Resultbox">
    

      <div>
        <h1>Your stops:</h1>
      </div>

      <div>
        <div
          class="singleResult"
          v-for="location in filteredLocations"
          v-bind:key="location.id"
        >
          <div><span class="category">Name:</span> {{ location.name }}</div>
          <div><span class="category">State:</span> {{ location.state }}</div>
          <div><span class="category">City:</span> {{ location.city }}</div>
          <div><span class="category">Highway:</span> {{ location.highway }}</div>
          <div><span class="category">Amenities & Services:</span> {{ location.amenitiesAndServices }}</div>
          <div><span class="category">Restaurants:</span> {{ location.restaurants }}</div>
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
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: center;
  font-size: 15px;
  background-color:#DBF5FF;
}

h1 {
  background-color: #0089BA;
  color: white;
  padding: 10px;
  border: 2px solid white;
}

#resultWrapper {
  background-color: #DBF5FF;
}

.singleResult {
  text-align: start;
  /* max-width: 500px; */
  margin: 15px;
  background-color: rgb(255, 255, 255);
  padding: 5px;
  border: 7px solid #0089BA;
}

.category {
  font-weight:bold;
}
</style>
