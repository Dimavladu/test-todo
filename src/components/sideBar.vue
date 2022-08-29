<template>
  <div
    uk-height-viewport
    class="uk-card uk-card-default uk-width-1-3 uk-padding-small"
  >
    <div class="uk-card uk-flex uk-flex-center uk-margin">
      <span class="uk-text-bolder">Company</span>
    </div>
    <div
      class="
        uk-card
        uk-flex
        uk-flex-middle
        uk-flex-between
        uk-padding-small
        uk-padding-remove-vertical
        uk-background-muted
      "
    >
      <div class="uk-flex uk-flex-left uk-flex-middle">
        <span uk-icon="thumbnails"></span>
        <div class="uk-padding-small">Tasks</div>
      </div>
      <span class="uk-badge">{{ $store.getters.countTodos }}</span>
    </div>
    <div
      v-if="selectedTask.id"
      class="
        uk-card
        uk-flex
        uk-flex-middle
        uk-flex-between
        uk-margin-small
        uk-padding-small
        uk-margin-remove-bottom
        uk-background-muted
      "
    >
      <div class="uk-flex-middle">
        <the-input
          id="title"
          label="Title"
          type="text"
          :model.sync="selectedTask.title"
          placeholder="Title"
        />
        <the-input
          id="id"
          label="User Id"
          type="number"
          :model.sync="selectedTask.userId"
          placeholder="User Id"
        />
        <the-btn
          @click.native="$store.commit('deleteTask', selectedTask)"
          class="uk-width"
          icon="trash"
          text="Delete task"
        />
      </div>
    </div>
    <div class="uk-position-bottom uk-padding-small">
      <div
        class="
          uk-background-muted
          uk-card
          uk-flex
          uk-flex-middle
          uk-flex-between
          uk-flex-column
          uk-margin-small
          uk-padding-small
          uk-margin-remove-bottom
        "
      >
        <template v-if="createTaskToggle">
          <the-btn
            class="uk-width-small"
            @click.native="createTask()"
            icon="plus"
            text="Create Task"
          />
          <the-input
            id="creatTitle"
            type="text"
            :model.sync="task.title"
            placeholder="Title"
          />
          <the-input
            id="creatUserId"
            type="number"
            :model.sync="task.userId"
            placeholder="User ID"
          />
          {{ err }}
        </template>
        <the-btn
          class="uk-width"
          @click.native="changeTaskToggle()"
          :icon="createTaskToggle ? 'close' : 'plus'"
          :text="createTaskToggle ? 'Close menu' : 'New task'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import theBtn from "./theBtn.vue";
import theInput from "./theInput.vue";

export default {
  components: { theBtn, theInput },
  created() {},
  methods: {
    changeTaskToggle() {
      this.createTaskToggle = !this.createTaskToggle;
    },
    async createTask() {
      if (this.task.title && this.task.title.length < 20 && this.task.userId) {
        this.$store.commit("createTask", this.task);
        this.task = {
          id: new Date(),
          title: "",
          userId: "",
          completed: false,
        };
        this.createTaskToggle = false;
      } else {
        this.err = "Please, enter correct values";
        setTimeout(() => (this.err = ""), 5000);
      }
    },
  },
  data() {
    return {
      createTaskToggle: false,
      task: {
        id: Date.now().valueOf(),
        title: "",
        userId: "",
        completed: false,
      },
      err: "",
    };
  },
  computed: {
    selectedTask: {
      get() {
        return this.$store.state.selectedTask;
      },
      set(val) {
        this.$store.commit("changeTask", val);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
</style>