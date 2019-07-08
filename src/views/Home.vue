<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12 sm8 offset-sm2 md6 offset-md3>
        <!-- INPUT -->
        <v-text-field
          v-model="newTaskTitle"
          label="What is on your mind?"
          outlined
          clearable
          @keydown.enter="addNewTask"
        ></v-text-field>
        <!-- INPUT END -->
      </v-flex>

      <v-flex xs12 sm8 offset-sm2 md6 offset-md3>
        <v-card>
          <p class="pt-3 text-xs-center">
            Tasks: {{ totalNumOfTasks }} / Completed:
            {{ totalNumOfCompletedTasks }}
          </p>
          <v-divider></v-divider>

          <!-- LIST -->
          <v-list shaped>
            <v-list-item-group v-model="completedTasks" multiple>
              <template v-for="task in tasks">
                <v-divider v-if="!task" :key="`divider-${task.id}`"></v-divider>

                <v-list-item
                  v-else
                  :key="`item-${task.id}`"
                  :value="task.id"
                  active-class="yellow--text text--accent-4"
                  @click.native="toggleTaskCompletion(task)"
                >
                  <template v-slot:default="{ active }">
                    <v-list-item-content>
                      <v-list-item-title
                        v-text="`${task.id}. ${task.title}`"
                      ></v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-action>
                      <v-checkbox
                        :input-value="active"
                        :true-value="task.title"
                        color="yellow accent-4"
                      ></v-checkbox>
                    </v-list-item-action>
                  </template>
                </v-list-item>
              </template>
            </v-list-item-group>
          </v-list>
          <!-- LIST END -->
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      newTaskTitle: null,
      completedTasks: [],
      tasks: [
        {
          id: 1,
          done: false,
          title: "Foobar"
        },
        {
          id: 2,
          done: true,
          title: "Fizzbuzz"
        }
      ]
    };
  },
  methods: {
    toggleTaskCompletion(currentTask) {
      this.tasks.filter(task =>
        task.id === currentTask.id ? (task.done = !task.done) : false
      );
    },
    addNewTask() {
      this.tasks.push({
        id: this.tasks.length + 1,
        done: false,
        title: this.newTaskTitle
      });
      this.newTaskTitle = null;
    }
  },
  computed: {
    totalNumOfTasks() {
      return this.tasks.length;
    },
    totalNumOfCompletedTasks() {
      return this.tasks.filter(task => task.done).length;
    }
  },
  created() {
    this.tasks.forEach(cTask =>
      cTask.done ? this.completedTasks.push(cTask.id) : false
    );
  }
};
</script>
