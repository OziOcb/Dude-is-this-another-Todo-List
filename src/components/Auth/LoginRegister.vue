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
            ></v-text-field>

            <v-btn class="mb-1" @click="submit">{{ tab }}</v-btn>
            <p class="typo__p green--text" v-if="submitStatus === 'OK'">
              Thanks for your registration!
            </p>
            <p class="typo__p red--text" v-if="submitStatus === 'ERROR'">
              Please fill the form correctly.
            </p>
            <p class="typo__p blue--text" v-if="submitStatus === 'PENDING'">
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
import { mapActions } from "vuex";

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
    },
    submitStatus: null
  }),

  computed: {
    tabTitle() {
      return this.tab.charAt(0).toUpperCase() + this.tab.slice(1);
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
    ...mapActions("auth", ["registerUser"]),
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
          if (this.tab === "login") {
            console.log("login the user");
          } else {
            this.registerUser(this.formData);
          }
        }, 500);
      }
    }
  }
};
</script>
