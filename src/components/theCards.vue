<template>
  <div class="uk-flex uk-width-2-3">
    <base-cards title="To do">
      <draggable v-model="todosUnCompleted" group="list">
        <the-card
          v-for="item in todosUnCompleted"
          :key="item.id"
          :task="item"
        ></the-card>
      </draggable>
    </base-cards>
    <base-cards title="Completed">
      <draggable v-model="todosCompleted" group="list">
        <the-card
          v-for="item in todosCompleted"
          :key="item.id"
          :task="item"
        ></the-card>
      </draggable>
    </base-cards>
  </div>
</template>

<script>
import baseCards from "./baseCards.vue";
import theCard from "./theCard.vue";
import draggable from "vuedraggable";
export default {
  components: { baseCards, theCard, draggable },
  props: {},
  data() {
    return {};
  },
  methods: {},
  computed: {
    todosCompleted: {
      get() {
        return this.$store.state.todosCompleted;
      },
      set(val) {
        val.map((v) => (v.completed = true));
        this.$store.commit("changeCompTodos", val);
      },
    },
    todosUnCompleted: {
      get() {
        return this.$store.state.todosUnCompleted;
      },
      set(val) {
        val.map((v) => (v.completed = false));
        this.$store.commit("changeUnCompTodos", val);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
</style>