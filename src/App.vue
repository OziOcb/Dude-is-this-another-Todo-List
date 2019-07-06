<template>
  <v-app>
    <!-- TOP BAR (desktop) -->
    <v-app-bar app color="info">
      <!-- title -->
      <v-toolbar-title class="headline text-uppercase">
        <span>Todo</span>
        <span class="font-weight-light">List</span>
      </v-toolbar-title>
      <!-- title end -->

      <v-spacer></v-spacer>

      <!-- nav list (desktop) -->
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="(item, index) in nav" :key="index" :to="item.route" text>
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
          <img src="./assets/oziocb.jpg" />
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
          <!-- loop through nav-links -->
          <v-list-item
            v-for="(item, index) in nav"
            :key="index"
            link
            :to="item.route"
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

    <!-- CONTENT -->
    <v-content>
      <router-view></router-view>
    </v-content>
    <!-- CONTENT END -->
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: 1,
    nav: [
      { icon: "mdi-account", title: "List", route: "/" },
      { icon: "mdi-image", title: "About me", route: "/about" }
    ]
  }),

  watch: {
    group() {
      this.drawer = false;
    }
  }
};
</script>
