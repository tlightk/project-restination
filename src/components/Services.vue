<template>
  <div class="services-container">
    <input type="checkbox" name="oil-change" />
    <label for="oil-change">Oil Change</label>

    <input type="checkbox" name="light-mechanical" />
    <label for="light-mechanical">Light Mechanical</label>

    <input type="checkbox" name="tire-pass" />
    <label for="tire-pass">Tire Pass</label>

    <input type="checkbox" name="truck-tire-care" />
    <label for="truck-tire-care">Truck Tire Care</label>
  </div>
</template>

<script>
export default {
  name: "services",
};
</script>

<style>
.services-container {
  margin: 60px;
}
</style>
