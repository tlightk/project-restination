<template>
  <div class="restaurants-container">
    <input type="checkbox" name="arbys" />
    <label for="arbys">Arby's</label>

    <input
      @change="updateWendysfilter"
      v-bind:checked="Wendysfilter"
      type="checkbox"
      name="wendys"
    />
    <label for="wendys">Wendy's</label>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "restaurants",
  computed: {
    ...mapState(["Wendysfilter"]),
  },
  methods: {
    updateWendysfilter() {
      this.$store.dispatch("changeWendysfilter");
    },
  },
};
</script>

<style>
.restaurants-container {
  margin: 60px;
}
</style>
