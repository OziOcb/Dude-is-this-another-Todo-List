<template>
  <v-layout column>
    <v-btn-toggle class="d-block" v-model="filter">
      <v-tooltip top v-for="btn in btns" :key="btn.id">
        <template v-slot:activator="{ on }">
          <v-btn
            style="width:33.333333%"
            v-on="on"
            @click="$emit('changeFilterValue', btn.value)"
            text
            :value="`${btn.value}`"
          >
            <span class="hidden-sm-and-down">{{ btn.value }}</span>
            <v-icon>{{ btn.icon }}</v-icon></v-btn
          >
        </template>
        <span>{{ btn.tooltip }}</span>
      </v-tooltip>
    </v-btn-toggle>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      filter: "all",
      btns: [
        {
          id: 1,
          value: "all",
          icon: "mdi-file-document-box-outline",
          tooltip: "show all tasks"
        },
        {
          id: 2,
          value: "completed",
          icon: "mdi-file-document-box-check-outline",
          tooltip: "show only completed tasks"
        },
        {
          id: 3,
          value: "uncompleted",
          icon: "mdi-file-document-box-remove-outline",
          tooltip: "show only waiting tasks"
        }
      ]
    };
  }
};
</script>
