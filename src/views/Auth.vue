<template>
  <div class="auth">
    <!-- INPUT -->
    <v-tabs
      v-model="tab"
      background-color="deep-purple accent-4"
      centered
      dark
      icons-and-text
    >
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#login">
        Login
      </v-tab>

      <v-tab href="#register">
        Register
      </v-tab>
    </v-tabs>

    <v-container>
      <v-layout wrap>
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2>
          <v-tabs-items v-model="tab">
            <v-tab-item value="login">
              <LoginRegister :tab="tab" />
            </v-tab-item>

            <v-tab-item value="register">
              <LoginRegister :tab="tab" />
            </v-tab-item>
          </v-tabs-items>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import LoginRegister from "@/components/Auth/LoginRegister.vue";

export default {
  data() {
    return {
      tab: "login",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
  },
  components: {
    LoginRegister
  }
};
</script>

<style></style>
