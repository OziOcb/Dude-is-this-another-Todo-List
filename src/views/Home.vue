<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12 sm8 offset-sm2 md6 offset-md3>
        <!-- INPUT -->
        <InputAddNewTask />
      </v-flex>

      <v-flex xs12 sm8 offset-sm2 md6 offset-md3>
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
