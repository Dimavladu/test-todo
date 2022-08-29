<template>
  <div>
    <label v-if="label" class="uk-form-label" :for="id">{{ label }}</label>
    <input
      :id="id"
      v-model="value"
      class="uk-input"
      :type="type"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
    },
    id: {
      type: String,
      required: false,
    },
    model: {
      required: true,
    },
    label: {
      type: String,
      required: false,
    },
  },
  computed: {
    value: {
      get() {
        return this.model;
      },
      set(val) {
        this.$emit("update:model", val);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
</style>