<template>
  <div>
    <v-card flat class="mb-5">
      <v-container>
        <v-layout>
          <v-flex xs10 offset-xs1 sm8 offset-sm2>
            <!-- Tab Banner -->
            <v-banner class="mb-3">
              <v-avatar slot="icon" size="40">
                <v-icon icon="mdi-account-circle" color="white">
                  mdi-account-circle
                </v-icon>
              </v-avatar>
              {{ tabTitle }} to access your Todos anywhere!
            </v-banner>

            <!-- Login/Register Form -->
            <form>
              <!-- Email Input Field -->
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

              <!-- Password Input Field -->
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

              <!-- Submit Button -->
              <v-btn
                :loading="getSubmitMessage === 'Sending...'"
                :disabled="getSubmitMessage === 'Sending...'"
                class="mb-1"
                @click="submit"
                >{{ tab }}</v-btn
              >

              <!-- Validation Message-->
              <p
                class="red--text"
                :class="submitMessageClass"
                v-if="getSubmitMessage"
              >
                {{ getSubmitMessage }}
              </p>

              <!-- Validation Overlay -->
              <v-overlay :value="getSubmitMessage === 'Sending...'">
                <v-progress-circular
                  indeterminate
                  color="blue"
                  size="64"
                ></v-progress-circular>
                <p class="mt-3 blue--text">Sending...</p>
              </v-overlay>
            </form>
            <!-- Login/Register Form End -->
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
    <div class="text-xs-center">
      <p class="body-2 mb-2">
        Feel free to create your account and use this app like it is yours.
        However, if you just want to have a quick look around, you can log in as
        a
        <kbd>tony@hawk.com</kbd> with <kbd>Skateboard411</kbd> as a password.
      </p>
      <p class="heading">Have Fun!</p>
    </div>
  </div>
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
    ...mapGetters("auth", ["getSubmitMessage"]),
    tabTitle() {
      return this.tab.charAt(0).toUpperCase() + this.tab.slice(1);
    },
    submitMessageClass() {
      return {
        "blue--text": this.getSubmitMessage === "Sending..."
      };
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
      "handleSubmitMessageChange"
    ]),
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.handleSubmitMessageChange("Please fill the form correctly!");
      } else {
        this.handleSubmitMessageChange("Sending...");

        if (this.tab === "login") {
          this.loginUser(this.formData);
        } else {
          this.registerUser(this.formData);
        }

        this.$v.$reset();
        this.formData.password = "";
      }
    }
  }
};
</script>
