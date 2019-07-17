<template>
  <div>
    <v-btn
      v-for="btn in btns"
      :key="btn.id"
      @click.native="removeTask(task)"
      :class="`${btn.mq} ma-2`"
      :fab="btn.type === 'fab'"
      :rounded="btn.type === 'rounded'"
      dark
      color="red"
    >
      {{ btn.text }}
      <v-icon>{{ btn.icon }}</v-icon>
    </v-btn>
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
      btns: [
        {
          id: 1,
          mq: "hidden-sm-and-up",
          type: "fab",
          text: "",
          icon: "mdi-delete"
        },
        {
          id: 2,
          mq: "hidden-xs-only",
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
