<template>
  <v-layout column>
    <v-btn-toggle v-model="icon">
      <v-btn text value="all">
        <span class="hidden-sm-and-down">All</span>
        <v-icon>mdi-file-document-box-outline</v-icon>
      </v-btn>

      <v-btn text value="completed">
        <span class="hidden-sm-and-down">Completed</span>
        <v-icon>mdi-file-document-box-check-outline</v-icon>
      </v-btn>

      <v-btn text value="uncompleted">
        <span class="hidden-sm-and-down">Uncompleted</span>
        <v-icon>mdi-file-document-box-remove-outline</v-icon>
      </v-btn>
    </v-btn-toggle>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      icon: "all"
    };
  }
};
</script>
