<template>
  <div class="amenities-container">
    <input 
    @change='updateATMfilter'
    type="checkbox" name="atm" />
    <label for="atm">ATM</label>

    <input type="checkbox" name="wifi" />
    <label for="wifi">Wifi</label>
  </div>
</template>

<script>
export default {
  name: "amenities",
  methods: {
    updateATMfilter() {
      this.$store.dispatch("changeATMfilter");
    }
  }
};
</script>

<style>
.amenities-container {
  margin: 60px;
}
</style>
