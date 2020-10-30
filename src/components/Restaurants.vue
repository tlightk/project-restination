<template>
  <div class="restaurants-container">
    <input type="checkbox" name="arbys" />
    <label for="arbys">Arby's</label>

    <input type="checkbox" name="wendys" />
    <label for="wendys">Wendy's</label>
  </div>
</template>

<script>
export default {
  name: "restaurants",
};
</script>

<style>
.restaurants-container {
  margin: 60px;
}
</style>
