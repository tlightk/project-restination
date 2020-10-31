<template>
  <div class="services-container">
    <input @change="updateOilChangefilter" type="checkbox" name="oil-change" />
    <label for="oil-change">Oil Change</label>

    <input
      @change="updateLightMechanicalfilter"
      type="checkbox"
      name="light-mechanical"
    />
    <label for="light-mechanical">Light Mechanical</label>

    <input @change="updateTirePassfilter" type="checkbox" name="tire-pass" />
    <label for="tire-pass">Tire Pass</label>
  </div>
</template>

<script>
export default {
  name: "services",
  methods: {
    updateOilChangefilter() {
      this.$store.dispatch("changeOilChangefilter");
    },
    updateLightMechanicalfilter() {
      this.$store.dispatch("changeLightMechanicalfilter");
    },
    updateTirePassfilter() {
      this.$store.dispatch("changeTirePassfilter");
    },
  },
};
</script>

<style>
.services-container {
  margin: 60px;
}
</style>
