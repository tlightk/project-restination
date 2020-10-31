<template>
  <div class="restaurants-container">
    <input
      @change="updateArbysfilter"
      v-bind:checked="Arbysfilter"
      type="checkbox"
      name="arbys"
    />
    <label for="arbys">Arby's</label>

    <input
      @change="updateWendysfilter"
      v-bind:checked="Wendysfilter"
      type="checkbox"
      name="wendys"
    />
    <label for="wendys">Wendy's</label>

    <input
      @change="updateSubwayfilter"
      v-bind:checked="Subwayfilter"
      type="checkbox"
      name="subway"
    />
    <label for="subway">Subway</label>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "restaurants",
  computed: {
    ...mapState(["Wendysfilter", "Arbysfilter", "Subwayfilter"]),
  },
  methods: {
    updateWendysfilter() {
      this.$store.dispatch("changeWendysfilter");
    },
    updateArbysfilter() {
      this.$store.dispatch("changeArbysfilter");
    },
    updateSubwayfilter() {
      this.$store.dispatch("changeSubwayfilter");
    },
  },
};
</script>

<style>
.restaurants-container {
  margin: 60px;
}
</style>
