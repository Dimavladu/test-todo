<template>
  <div
    class="
      uk-card
      uk-flex
      uk-width-2-3
      uk-flex-column
      uk-background-muted
      uk-margin-small
    "
  >
    <div class="uk-text-bold uk-align-center">{{ title }}</div>
    <slot />
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style lang="scss" scoped>
</style>