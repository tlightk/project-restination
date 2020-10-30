<template>
  <div id="Resultbox">
    <h1>MANY Locations Found</h1>
    <div>
      <p>THIS {{ locations }}</p>
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
    ...mapState(["locations"]),
  },
  methods: {
    getLocations() {
      this.$store.dispatch("loadLocations");
    },
  },
};
</script>

<style>
#Resultbox {
  font-size: 20px;
  background-color: blueviolet;
}
</style>
