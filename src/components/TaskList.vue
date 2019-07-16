<template>
  <v-card>
    <p class="pt-3 text-xs-center">
      Tasks: {{ getTotalNumOfTasks }} / Completed:
      {{ getTotalNumOfCompletedTasks }}
    </p>
    <v-divider></v-divider>

    <!-- LIST -->
    <v-list class="overflow-hidden" shaped>
      <v-list-item-group :value="getCompletedTasks" multiple>
        <template v-for="task in getTasks">
          <v-list-item
            class="border"
            :class="{ 'border--success': task.completed }"
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

              <TaskRemoveBtn :task="task" />
            </template>
          </v-list-item>
        </template>
      </v-list-item-group>
    </v-list>
    <!-- LIST END -->
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TaskRemoveBtn from "@/components/TaskRemoveBtn.vue";

export default {
  components: {
    TaskRemoveBtn
  },
  methods: mapActions(["toggleTaskCompletion", "fetchTasks"]),
  computed: mapGetters([
    "getTasks",
    "getTotalNumOfTasks",
    "getTotalNumOfCompletedTasks",
    "getCompletedTasks"
  ]),
  created() {
    this.fetchTasks();
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
