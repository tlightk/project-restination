<template>
  <div id="app">
    <div>
      <div id="logoWrapper">
        <img id="logo" src="../img/restination_logo_transparent.png" />
      </div>
      <div id="mapWrapper">
        <Map />
      </div>
      <div id="boxWrapper">
        <button id="search" v-on:click="toggleBoxes">{{ buttonText }}</button>
        <div v-if="clicked">
          <Searchbox />
        </div>
        <div v-else>
          <Resultbox />
        </div>  
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
      buttonText: "Find your Restination",
    };
  },
  methods: {
    toggleBoxes() {
      if (this.clicked) {
        this.clicked = false;
        this.buttonText = "Reset";
      } else {
        this.clicked = true;
        this.buttonText = "Find your Restination";
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

#logo {
  width: 50%;
  height: auto;
  margin-bottom: 20px;
}

#mapWrapper {
  padding: 10px;
  background-color: lightskyblue;
}

#search {
  margin-top: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: rgb(255, 81, 81);
  color: rgb(75, 0, 0);
  border: 2px solid white;
  font-size: 25px;
}

#search:hover {
  background-color: rgb(194, 49, 49);
  color: white;
}

#boxWrapper {
  background-color: #DBF5FF; 
}

</style>
