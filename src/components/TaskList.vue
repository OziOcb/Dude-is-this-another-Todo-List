<template>
  <v-card>
    <p class="pt-3 text-xs-center">
      Tasks: {{ totalNumOfTasks }} / Completed:
      {{ totalNumOfCompletedTasks }}
    </p>
    <v-divider></v-divider>

    <!-- LIST -->
    <v-list class="overflow-hidden" shaped>
      <v-list-item-group v-model="completedTasks" multiple>
        <template v-for="task in tasks">
          <v-list-item
            class="border"
            :class="{ 'border--success': task.done }"
            :key="`item-${task.id}`"
            :value="task.id"
            @click.native="toggleTaskCompletion(task)"
          >
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox
                  :input-value="active"
                  :true-value="task.title"
                  color="light-blue lighten-2"
                ></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title v-text="task.title"></v-list-item-title>
              </v-list-item-content>

              <v-btn
                @click.native="removeTask(task)"
                class="hidden-sm-and-up ma-2"
                fab
                dark
                color="red"
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>

              <v-btn
                @click.native="removeTask(task)"
                class="hidden-xs-only ma-2"
                color="red"
                dark
                rounded
              >
                Remove
                <v-icon dark right>mdi-delete</v-icon>
              </v-btn>
            </template>
          </v-list-item>
        </template>
      </v-list-item-group>
    </v-list>
    <!-- LIST END -->
  </v-card>
</template>

<script>
export default {
  name: "todoList",
  data() {
    return {
      counter: 0,
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
    removeTask(currentTask) {
      this.tasks = this.tasks.filter(task => task.id !== currentTask.id);
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
    this.counter = this.tasks.length;
  }
};
</script>

<style lang="scss" scoped>
$borderWidth: 10px;

.border {
  border-left: $borderWidth solid #0091ea;
  transform: translateX(-$borderWidth);
  transition: transform 0.3s ease;

  &::before {
    margin-left: -$borderWidth;
  }

  &--success {
    transform: translateX(0px);
  }
}
</style>
