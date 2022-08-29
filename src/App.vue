<template>
  <div class="uk-flex">
    <side-bar />
    <the-cards />
  </div>
</template>

<script>
import sideBar from "./components/sideBar.vue";
import theCards from "./components/theCards.vue";

export default {
  name: "App",
  components: { sideBar, theCards },
  async mounted() {
    await this.$store.dispatch("getTodos");
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style lang="scss">
@import "../node_modules/uikit/dist/css/uikit.min.css";
</style>
