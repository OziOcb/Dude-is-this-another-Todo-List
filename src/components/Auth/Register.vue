<template>
  <v-card flat>
    <v-container>
      <v-layout>
        <v-flex xs10 offset-xs1 sm8 offset-sm2>
          <v-banner single-line class="mb-3">
            <v-avatar slot="icon" size="40">
              <v-icon icon="mdi-account-circle" color="white">
                mdi-account-circle
              </v-icon>
            </v-avatar>
            Register to access your Todos anywhere!
          </v-banner>

          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="formData.email"
              label="Email"
              outlined
            ></v-text-field>

            <v-text-field
              type="password"
              v-model="formData.password"
              label="Password"
              outlined
            ></v-text-field>

            <v-btn color="primary" class="mb-3">Register</v-btn>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      formData: {
        email: "",
        password: ""
      }
    };
  }
};
</script>

<style></style>
