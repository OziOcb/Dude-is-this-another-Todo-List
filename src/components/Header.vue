<template>
  <div class="header">
    <!-- SNACKBAR -->
    <v-snackbar v-model="snackbar" top :timeout="2000" color="success">
      {{ text }}
      <v-btn color="white" text @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
    <!-- SNACKBAR END -->

    <!-- TOP BAR (desktop) -->
    <v-app-bar app color="light-blue accent-4">
      <!-- title -->
      <v-toolbar-title class="headline text-uppercase">
        <span>Todo</span>
        <span class="font-weight-light">List</span>
      </v-toolbar-title>
      <!-- title end -->

      <v-spacer></v-spacer>

      <!-- nav list (desktop) -->
      <v-toolbar-items class="hidden-sm-and-down">
        <!-- Loggin button -->
        <v-btn v-if="!getLoggedIn" :to="{ name: 'auth' }" text exact>
          Login
        </v-btn>
        <!-- Loggin button end -->
        <!-- Loggout button -->
        <v-btn v-if="getLoggedIn" @click="logoutUser" text exact>
          Logout
        </v-btn>
        <!-- Loggout button end -->
        <v-btn
          v-for="(item, index) in getFilteredNav"
          :key="index"
          :to="{ name: item.name }"
          text
          exact
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <!-- nav list (desktop) end -->

      <!-- hamburger icon (mobile) -->
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <!-- hamburger icon (mobile) end -->
    </v-app-bar>
    <!-- TOP BAR (desktop) END -->

    <!-- NAV DRAWER (mobile) -->
    <v-navigation-drawer v-model="drawer" app right temporary>
      <v-list-item two-line>
        <!-- avatar -->
        <v-list-item-avatar>
          <img src="@/assets/oziocb.jpg" />
        </v-list-item-avatar>
        <!-- avatar end -->

        <!-- title & desc -->
        <v-list-item-content>
          <v-list-item-title>
            <span>Todo</span>
            <span class="font-weight-light">List</span>
          </v-list-item-title>
          <v-list-item-subtitle>by OziOcb</v-list-item-subtitle>
        </v-list-item-content>
        <!-- title & desc end -->
      </v-list-item>

      <v-divider></v-divider>

      <!-- navigation -->
      <v-list nav>
        <v-list-item-group
          v-model="group"
          active-class="info--text text--accent-4"
        >
          <!-- Login button -->
          <v-list-item v-if="!getLoggedIn" link :to="{ name: 'auth' }" exact>
            <v-list-item-icon>
              <v-icon>mdi-account-circle</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Login</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- Login button end -->

          <!-- Logout button -->
          <v-list-item v-if="getLoggedIn" @click="logoutUser" link exact>
            <v-list-item-icon>
              <v-icon>mdi-account-circle</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- Logout button end -->

          <!-- loop through nav-links -->
          <v-list-item
            v-for="(item, index) in getFilteredNav"
            :key="index"
            link
            :to="{ name: item.name }"
            exact
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- loop through nav-links end -->
        </v-list-item-group>
      </v-list>
      <!-- navigation end -->
    </v-navigation-drawer>
    <!-- NAV DRAWER (mobile) END -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    drawer: false,
    group: 1,
    snackbar: false,
    text: "New task has been added!"
  }),
  computed: {
    ...mapGetters(["getNav", "getTotalNumOfTasks"]),
    ...mapGetters("auth", ["getLoggedIn"]),
    getFilteredNav() {
      return !this.getLoggedIn
        ? this.getNav.filter(item => item.name === "about")
        : this.getNav;
    }
  },
  methods: {
    ...mapActions("auth", ["logoutUser"])
  },
  watch: {
    group() {
      this.drawer = false;
    },
    getTotalNumOfTasks(val, oldVal) {
      if (val > oldVal) this.snackbar = true;
    }
  }
};
</script>
