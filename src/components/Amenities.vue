<template>
  <div class="amenities-container">
    <input
      @change="updateATMfilter"
      v-bind:checked="ATMfilter"
      type="checkbox"
      name="atm"
    />
    <label for="atm">ATM</label>

    <input
      @change="updateWififilter"
      v-bind:checked="wififilter"
      type="checkbox"
      name="wifi"
    />
    <label for="wifi">Wifi</label>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "amenities",
  computed: {
    ...mapState(["ATMfilter", "wififilter"]),
  },
  methods: {
    updateATMfilter() {
      this.$store.dispatch("changeATMfilter");
    },
    updateWififilter() {
      this.$store.dispatch("changeWififilter");
    },
  },
};
</script>

<style>
.amenities-container {
  margin: 60px;
}
</style>
