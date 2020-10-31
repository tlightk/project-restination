<template>
  <div class="services-container">
    <input
      @change="updateOilChangefilter"
      v-bind:checked="oilChangefilter"
      type="checkbox"
      name="oil-change"
    />
    <label for="oil-change">Oil Change</label>

    <input
      @change="updateLightMechanicalfilter"
      v-bind:checked="lightMechanicalfilter"
      type="checkbox"
      name="light-mechanical"
    />
    <label for="light-mechanical">Light Mechanical</label>

    <input
      @change="updateTirePassfilter"
      v-bind:checked="tirePassfilter"
      type="checkbox"
      name="tire-pass"
    />
    <label for="tire-pass">Tire Pass</label>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "services",
  computed: {
    ...mapState(["oilChangefilter", "lightMechanicalfilter", "tirePassfilter"]),
  },
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
