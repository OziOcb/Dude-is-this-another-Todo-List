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

          <form>
            <v-text-field
              type="email"
              v-model="email"
              :error-messages="emailErrors"
              label="E-mail"
              required
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
            ></v-text-field>
            <v-text-field
              type="password"
              v-model="password"
              :error-messages="passwordErrors"
              label="Password"
              required
              @input="$v.password.$touch()"
              @blur="$v.password.$touch()"
              class="mb-3"
            ></v-text-field>

            <v-btn @click="submit">submit</v-btn>
          </form>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6) }
  },

  data: () => ({
    password: "",
    email: ""
  }),

  computed: {
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
        errors.push("Password must be at least 6 characters long");
      !this.$v.password.required && errors.push("Password is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    }
  },

  methods: {
    submit() {
      this.$v.$touch();
      console.log("elo");
    }
  }
};
</script>
