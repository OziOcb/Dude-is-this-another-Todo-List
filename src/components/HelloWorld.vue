<template>
  <div>
    <input
      type="text"
      v-model="newValue"
      placeholder="lorem ipsum"
      @change="updateValue(newValue)"
    />
    <hr />
    <h1>value is: {{ value }}</h1>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      newValue: ""
    };
  },
  computed: {
    ...mapGetters(["value"])
  },
  methods: {
    ...mapActions(["updateValue"])
  }
};
</script>

<style></style>
