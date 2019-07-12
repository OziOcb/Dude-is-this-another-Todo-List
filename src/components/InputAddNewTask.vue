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
      this.tasks.push({
        id: this.counter + 1,
        done: false,
        title: this.newTaskTitle
      });
      this.counter++;
      this.newTaskTitle = null;
    }
  }
};
</script>
