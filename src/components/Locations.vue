<template>
  <div class="locations-container">
    <div class="dropdown-container">
      <label for="highway">Highway</label>
      <select name="highway">
        <option value="1">405</option>
      </select>
      <label for="city">City</label>
      <select name="city">
        <option value="1">San Pedro</option>
      </select>
      <label for="state">State</label>
      <select name="state">
        <option value="1">one</option>
        <option value="2">two</option>
        <option value="3">threeeeee</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "locations",
};
</script>

<style>
.locations-container {
  margin: 60px;
}
</style>
