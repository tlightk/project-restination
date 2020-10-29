<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <HelloWorld msg="Hello Michaelllllllll!" />
    <button v-on:click="test">TEST!!!</button>
    <div>
      <Map />
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Map from "./components/Map";
import Vuex from "./store";

export default {
  name: "app",
  components: {
    HelloWorld,
    Map,
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
