<template>
  <v-card flat>
    <v-container>
      <v-layout>
        <v-flex xs10 offset-xs1 sm8 offset-sm2>
          <v-banner class="mb-3">
            <v-avatar slot="icon" size="40">
              <v-icon icon="mdi-account-circle" color="white">
                mdi-account-circle
              </v-icon>
            </v-avatar>
            {{ tabTitle }} to access your Todos anywhere!
          </v-banner>

          <form>
            <v-text-field
              type="email"
              v-model="formData.email"
              :error-messages="emailErrors"
              label="E-mail"
              required
              @input="$v.formData.email.$touch()"
              @blur="$v.formData.email.$touch()"
              @keyup.enter="submit"
            ></v-text-field>
            <v-text-field
              type="password"
              v-model="formData.password"
              :error-messages="passwordErrors"
              label="Password"
              required
              @input="$v.formData.password.$touch()"
              @blur="$v.formData.password.$touch()"
              class="mb-3"
              @keyup.enter="submit"
            ></v-text-field>

            <v-btn class="mb-1" @click="submit">{{ tab }}</v-btn>

            <!-- Validation -->
            <p class="green--text" v-if="getSubmitStatus === 'OK'">
              {{ succesMessage }}
            </p>
            <p class="red--text" v-if="getSubmitStatus === 'BAD_LOGIN'">
              There is no user record corresponding to this identifier.
            </p>
            <p class="red--text" v-if="getSubmitStatus === 'BAD_REGISTER'">
              Something went wrong.. please try again.
            </p>
            <p class="red--text" v-if="getSubmitStatus === 'ERROR'">
              Please fill the form correctly.
            </p>
            <p class="blue--text" v-if="getSubmitStatus === 'PENDING'">
              Sending...
            </p>
          </form>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";
import { mapActions, mapGetters } from "vuex";

export default {
  props: ["tab"],
  mixins: [validationMixin],
  validations: {
    formData: {
      email: { required, email },
      password: { required, minLength: minLength(6) }
    }
  },
  data: () => ({
    formData: {
      password: "",
      email: ""
    }
  }),
  computed: {
    ...mapGetters("auth", ["getSubmitStatus"]),
    tabTitle() {
      return this.tab.charAt(0).toUpperCase() + this.tab.slice(1);
    },
    succesMessage() {
      return this.tab === "login"
        ? "You have been login"
        : "Thank you for registration";
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.formData.password.$dirty) return errors;
      !this.$v.formData.password.minLength &&
        errors.push("Password must be at least 6 characters long");
      !this.$v.formData.password.required &&
        errors.push("Password is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.formData.email.$dirty) return errors;
      !this.$v.formData.email.email && errors.push("Must be valid e-mail");
      !this.$v.formData.email.required && errors.push("E-mail is required");
      return errors;
    }
  },
  methods: {
    ...mapActions("auth", [
      "registerUser",
      "loginUser",
      "handleSubmitStatusChange"
    ]),
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.handleSubmitStatusChange("ERROR");
      } else {
        this.handleSubmitStatusChange("PENDING");

        if (this.tab === "login") {
          this.loginUser(this.formData);
        } else {
          this.registerUser(this.formData);
        }
      }
    }
  }
};
</script>
