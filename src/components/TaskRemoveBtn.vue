<template>
  <div class="taskRemoveBtns">
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
  methods: mapActions(["removeTask"])
};
</script>
