<template>
  <div
    class="
      uk-card
      uk-card-default
      uk-card-body
      uk-width-2-3
      uk-card-hover
      uk-align-center
      uk-padding-small
      uk-margin
    "
    @click="selectTask(task)"
  >
    <h5 class="uk-text-uppercase uk-text-bold">{{ task.title }}</h5>
    <p>Created by {{ task.userId }}</p>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    selectTask(task) {
      this.$store.commit("selectTask", task);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>