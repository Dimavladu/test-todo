<template>
  <div
    class="
      uk-card
      uk-card-default
      uk-card-hover
      uk-flex
      uk-flex-around
      uk-flex-middle
      uk-flex-center
      uk-padding-small
      uk-margin-small
    "
  >
    <span class="" :uk-icon="icon"></span>
    <div class="">{{ text }}</div>
  </div>
</template>

<script>
export default {
  props: ["icon", "text"],
};
</script>

<style lang="scss" scoped>
</style>