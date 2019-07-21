<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12 sm10 offset-sm1 md8 offset-md2>
        <!-- INPUT -->
        <InputAddNewTask />
      </v-flex>

      <v-flex xs12 sm10 offset-sm1 md8 offset-md2>
        <!-- TASK LIST -->
        <TaskList />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TaskList from "@/components/TaskList.vue";
import InputAddNewTask from "@/components/InputAddNewTask.vue";

export default {
  components: { TaskList, InputAddNewTask }
};
</script>
