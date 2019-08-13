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
import { mapActions } from "vuex";

export default {
  components: {
    Header
  },
  methods: {
    ...mapActions("auth", ["handleAuthStateChange"])
  },
  mounted() {
    this.handleAuthStateChange();
  }
};
</script>
