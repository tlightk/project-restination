<template>
  <div id="app">
    <div>
      <Map />
      <button id="search" v-on:click="toggleBoxes">{{ buttonText }}</button>
      <div v-if="clicked">
        <Searchbox />
      </div>
      <div v-else>
        <Resultbox />
      </div>
    </div>
  </div>
</template>

<script>
import Map from "./components/Map";
import Searchbox from "./components/Searchbox";
import Resultbox from "./components/resultbox/Resultbox";

export default {
  name: "app",
  components: {
    Map,
    Searchbox,
    Resultbox,
  },
  data: function() {
    return {
      clicked: true,
      buttonText: "Find your restination",
    };
  },
  methods: {
    toggleBoxes() {
      if (this.clicked) {
        this.clicked = false;
        this.buttonText = "Reset";
      } else {
        this.clicked = true;
        this.buttonText = "Find your restination";
        this.$store.dispatch("changeFilteredLocations"); // reset filtered locations
      }
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
