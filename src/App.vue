<template>
  <div id="app">
    <div>
      <Map />
      <Searchbox />
    </div>
  </div>
</template>

<script>
import Map from "./components/Map";
import Searchbox from "./components/Searchbox";

export default {
  name: "app",
  components: {
    Map,
    Searchbox,
  },
  methods: {
    async test() {
      // this is a test!!!!
      const result = await Vuex.dispatch("loadMarkers");
      console.log(result);
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
