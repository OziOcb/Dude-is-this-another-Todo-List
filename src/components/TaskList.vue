<template>
  <v-card>
    <div class="headline font-weight-light pt-4 pb-5 text-xs-center">
      Tasks: {{ getTotalNumOfTasks }} / Completed:
      {{ getTotalNumOfCompletedTasks }}
    </div>

    <TaskFilterBtnsBar @changeFilterValue="filter = $event" />

    <!-- LIST -->
    <v-list class="overflow-hidden" shaped>
      <template v-if="getTasksDownloaded">
        <!-- :value="completedTasksModel" keeps live record of competed tasks -->
        <v-list-item-group
          :value="completedTasksModel"
          multiple
          active-class="elo"
        >
          <!-- filteredTasks shows only tasks that are maching this.filter value -->
          <template v-for="(task, id) in filteredTasks">
            <v-list-item
              class="border"
              :class="{ 'border--success': task.completed }"
              :key="`item-${id}`"
              :value="id"
              @click.native="firebaseUpdateTask({ task, id })"
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

                <TaskRemoveBtn :task="task" :taskId="id" />
              </template>
            </v-list-item>
          </template>
        </v-list-item-group>
      </template>

      <!-- Spinner -->
      <div v-else class="text-xs-center my-5">
        <v-progress-circular
          indeterminate
          color="primary"
          class="mb-3"
          :size="50"
          :width="2"
        ></v-progress-circular>
        <div class="primary--text">...Loading...</div>
      </div>
    </v-list>
    <!-- LIST END -->
  </v-card>
</template>

<script>
// eslint-disable-next-line
import { mapGetters, mapActions } from "vuex";
import TaskRemoveBtn from "@/components/TaskRemoveBtn.vue";
import TaskFilterBtnsBar from "@/components/TaskFilterBtnsBar.vue";

export default {
  components: {
    TaskRemoveBtn,
    TaskFilterBtnsBar
  },
  data() {
    return {
      filter: "all"
    };
  },
  methods: mapActions(["firebaseUpdateTask"]),
  computed: {
    ...mapGetters([
      "getTasks",
      "getTotalNumOfTasks",
      "getTotalNumOfCompletedTasks",
      "getTasksDownloaded"
    ]),
    filteredTasks() {
      let list = {};
      const { filter, getTasks } = this;

      if (filter === "completed") {
        Object.keys(getTasks).forEach(t => {
          if (getTasks[t].completed) list[t] = getTasks[t];
        });
      } else if (filter === "uncompleted") {
        Object.keys(getTasks).forEach(t => {
          if (!getTasks[t].completed) list[t] = getTasks[t];
        });
      } else {
        Object.keys(getTasks).forEach(t => (list[t] = getTasks[t]));
      }

      return list;
    },
    completedTasksModel() {
      const cTasks = [];
      const { filter, getTasks } = this;

      if (filter !== "uncompleted") {
        Object.keys(getTasks).forEach(t => {
          if (getTasks[t].completed === true) {
            cTasks.push(t);
          }
        });
      }

      return cTasks;
    }
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
