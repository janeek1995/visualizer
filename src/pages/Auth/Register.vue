<template>
  <md-card>
    <md-card-media>
      <img src="@/assets/minusz_logo-large.png" />
    </md-card-media>
    <md-card-content>
      <md-field>
        <label>Email</label>
        <md-input v-model="email"></md-input>
      </md-field>
      <md-field>
        <label>Password</label>
        <md-input v-model="password" type="password"></md-input>
      </md-field>
      <md-field>
        <label>Retype password</label>
        <md-input v-model="password_confirm" type="password"></md-input>
      </md-field>
      <md-list>
        <md-list-item v-for="msg in error_messages" :key="msg">
          <span class="error_msg">{{ msg }}</span>
        </md-list-item>
      </md-list>
      <p>
        Already have an account?
        <router-link :to="{ name: 'Login' }">Log in</router-link>.
      </p>
    </md-card-content>
    <md-card-actions>
      <md-button class="md-raised md-primary register" v-on:click="register"
        >Register</md-button
      >
    </md-card-actions>
  </md-card>
</template>

<script>
import axios from "axios";
import router from "@/router";
import store from "@/store";

export default {
  name: "RegisterPage",
  data: function() {
    return {
      email: null,
      password: null,
      password_confirm: null,
      error_messages: []
    };
  },
  methods: {
    _verifyPasswords: function() {
      return (
        this.password &&
        this.password_confirm &&
        this.password === this.password_confirm
      );
    },
    register: function() {
      this.error_messages = [];
      if (!this._verifyPasswords()) {
        this.error_messages.push("Passwords are not the same.");
        return;
      }
      let self = this;
      let payload = {
        email: this.email,
        password: this.password
      };
      axios
        .post("/api/v1/auth/users/", payload)
        .then(function() {
          store
            .dispatch("login", payload)
            .then(function() {
              router.push({ path: "dashboard" });
            })
            .catch(function(error) {
              self.error_messages.push(error.data.non_field_errors);
            });
        })
        .catch(function(error) {
          // Debug
          console.log(error);
          self.error_messages.push("Registration failed");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.md-card {
  width: 600px;
  margin: 40px auto;
  padding: 20px;
  .md-card-media {
    margin: 20px 10px;
  }
  .register {
    margin: 0px auto !important;
  }
  .error_msg {
    color: red;
    font-size: 14px;
  }
}
</style>
