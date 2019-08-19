<template>
  <div class="input">
    <v-text-field
      v-model="task"
      label="What is on your mind?"
      :error-messages="taskErrors"
      :counter="40"
      :maxLength="50"
      outlined
      clearable
      @keydown.enter="addNewTask"
      @input="$v.task.$touch()"
      @blur="leavingInput"
    ></v-text-field>
  </div>
</template>

<script>
import { required, minLength, maxLength } from "vuelidate/lib/validators";

export default {
  data: () => {
    return {
      errors: false,
      task: ""
    };
  },
  validations: {
    task: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(40)
    }
  },
  computed: {
    taskErrors() {
      const errors = [];
      const { task } = this.$v;
      if (!task.$dirty) return errors;
      !task.maxLength && errors.push("Task must be at most 40 characters long");
      !task.minLength && errors.push("Task must be at least 2 characters long");
      !task.required && errors.push("This field is required.");
      return errors;
    }
  },
  methods: {
    addNewTask() {
      this.errors = this.$v.$anyError;
      if (this.errors === false && this.task !== "") {
        this.$store.dispatch("firebaseAddTask", this.task);
        this.task = "";
        this.$v.task.$reset();
      }
    },
    leavingInput() {
      this.task ? this.$v.task.$touch() : this.$v.task.$reset();
    }
  }
};
</script>
