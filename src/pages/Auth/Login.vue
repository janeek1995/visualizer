<template>
  <div>
    <md-field>
      <label>Username</label>
      <md-input v-model="username"></md-input>
    </md-field>
    <md-field>
      <label>Password</label>
      <md-input v-model="password"></md-input>
    </md-field>
    <md-button class="md-raised md-primary" v-on:click="login">Login</md-button>
  </div>
</template>

<script>
import router from "@/router";
import store from "@/store";

export default {
  name: "LoginPage",
  data: function() {
    return {
      username: "",
      password: ""
    };
  },
  computed: {
    is_auth() {
      return store.getters.is_auth;
    }
  },
  methods: {
    login: function() {
      let payload = {
        username: this.username,
        password: this.password
      };
      store.dispatch("login", payload).then(() => {
        router.push({ path: "dashboard" });
      });
    }
  }
};
</script>
