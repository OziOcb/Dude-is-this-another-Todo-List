<template>
  <div>
    <!-- Remove Task Button -->
    <v-btn
      v-for="btn in btns"
      :key="btn.id"
      @click.stop="dialog = true"
      :class="`${btn.mq} ma-2`"
      :fab="btn.type === 'fab'"
      :rounded="btn.type === 'rounded'"
      dark
      color="red"
    >
      {{ btn.text }}
      <v-icon>{{ btn.icon }}</v-icon>
    </v-btn>

    <!-- Dialog Box -->
    <v-dialog persistent v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">Remove this task?</v-card-title>

        <v-card-text>"{{ task.title }}"</v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">
            NO
          </v-btn>

          <v-btn
            color="red"
            text
            @click="removeTask(task)"
            @keyup.enter="removeTask(task)"
          >
            YES
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      dialog: false,
      btns: [
        {
          id: 1,
          mq: "hidden-md-and-up",
          type: "fab",
          text: "",
          icon: "mdi-delete"
        },
        {
          id: 2,
          mq: "hidden-sm-and-down",
          type: "rounded",
          text: "Remove",
          icon: "mdi-delete"
        }
      ]
    };
  },
  methods: mapActions(["removeTask"])
};
</script>
