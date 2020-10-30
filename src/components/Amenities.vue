<template>
  <div class="amenities-container">
    <input type="checkbox" name="atm" />
    <label for="atm">ATM</label>

    <input type="checkbox" name="wifi" />
    <label for="wifi">Wifi</label>
  </div>
</template>

<script>
export default {
  name: "amenities",
};
</script>

<style>
.amenities-container {
  margin: 60px;
}
</style>
