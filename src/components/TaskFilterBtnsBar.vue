<template>
  <v-layout column>
    <v-btn-toggle v-model="icon">
      <v-btn
        v-for="btn in btns"
        :key="btn.id"
        @click="$emit('changeFilterValue', btn.value)"
        text
        :value="`${btn.value}`"
      >
        <span class="hidden-sm-and-down">{{ btn.value }}</span>
        <v-icon>{{ btn.icon }}</v-icon>
      </v-btn>
    </v-btn-toggle>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      icon: "all",
      btns: [
        {
          id: 1,
          value: "all",
          icon: "mdi-file-document-box-outline"
        },
        {
          id: 2,
          value: "completed",
          icon: "mdi-file-document-box-check-outline"
        },
        {
          id: 3,
          value: "uncompleted",
          icon: "mdi-file-document-box-remove-outline"
        }
      ]
    };
  }
};
</script>
