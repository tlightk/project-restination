<template>
  <div id="app">
    <div>
      <Map />
      <Locations />
      <Services />
    </div>
  </div>
</template>

<script>
import Map from "./components/Map";
import Locations from "./components/Locations";
import Services from "./components/Services";

export default {
  name: "app",
  components: {
    Map,
    Locations,
    Services,
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
