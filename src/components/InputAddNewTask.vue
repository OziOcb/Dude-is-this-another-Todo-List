<template>
  <v-text-field
    v-model="newTaskTitle"
    label="What is on your mind?"
    outlined
    clearable
    @keydown.enter="addNewTask"
  ></v-text-field>
</template>

<script>
export default {
  data: () => {
    return {
      newTaskTitle: null
    };
  },
  methods: {
    addNewTask() {
      this.$store.dispatch("addNewTask", this.newTaskTitle);
      this.newTaskTitle = null;
    }
  }
};
</script>
