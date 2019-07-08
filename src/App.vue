<template>
  <v-app>
    <Header />

    <v-content>
      <v-slide-y-transition mode="out-in">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </v-slide-y-transition>
    </v-content>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header
  }
};
</script>
