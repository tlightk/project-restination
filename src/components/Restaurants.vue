<template>
  <div class="restaurants-container">
    <input type="checkbox" name="arbys" />
    <label for="arbys">Arby's</label>

    <input @change="updateWendysfilter" type="checkbox" name="wendys" />
    <label for="wendys">Wendy's</label>
  </div>
</template>

<script>
export default {
  name: "restaurants",
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
