<template>
  <div id="app">
    <div>
      <Map />
      <Locations />
    </div>
  </div>
</template>

<script>
import Map from "./components/Map";
import Locations from "./components/Locations";

export default {
  name: "app",
  components: {
    Map,
    Locations,
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
