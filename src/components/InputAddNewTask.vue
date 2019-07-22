<template>
  <div class="input">
    <v-text-field
      v-model="$v.formResponses.task.$model"
      label="What is on your mind?"
      outlined
      clearable
      @keydown.enter="addNewTask"
    ></v-text-field>

    <p v-if="errors" class="msg error">
      <span v-if="!$v.formResponses.task.required">
        this field is required.
      </span>
      <span v-if="!$v.formResponses.task.minLength">
        Field must have at least
        {{ $v.formResponses.task.$params.minLength.min }} characters.
      </span>
    </p>

    <p v-if="uiState === 'task added'" class="msg success">
      Hooray! Your task was added!
    </p>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";

export default {
  data: () => {
    return {
      uiState: "submit not clicked",
      errors: false,
      empty: true,
      formResponses: {
        task: ""
      }
    };
  },
  validations: {
    formResponses: {
      task: {
        required,
        minLength: minLength(2)
      }
    }
  },
  methods: {
    addNewTask() {
      this.formTouched = !this.$v.formResponses.$anyDirty;
      this.errors = this.$v.formResponses.$anyError;
      this.uiState = "submit clicked";
      if (this.errors === false && this.formTouched === false) {
        //this is where you send the responses
        this.$store.dispatch("addNewTask", this.formResponses.task);
        this.uiState = "task added";
      }
      this.formResponses.task = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.input {
  position: relative;
}

.msg {
  position: absolute;
  bottom: -15%;
  left: 0;
  right: 0;
  border-radius: 3px;
  padding-left: 10px;
}
</style>
