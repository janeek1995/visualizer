<template>
  <md-toolbar>
    <router-link tag="button" to="/" class="md-button">Minusz labs</router-link>
    <router-link
      tag="button"
      :to="{ name: 'Dashboard' }"
      class="md-button"
      v-if="is_auth"
      >Dashboard</router-link
    >
    <!--  Auth -->
    <router-link
      tag="button"
      :to="{ name: 'Login' }"
      class="md-button"
      v-if="!is_auth"
      >Log In</router-link
    >
    <md-button v-on:click="logout" v-if="is_auth">Logout</md-button>
  </md-toolbar>
</template>

<script>
import store from "@/store";
import router from "@/router";

export default {
  name: "LoginPage",
  computed: {
    is_auth() {
      return store.getters.is_auth;
    }
  },
  methods: {
    logout: function() {
      store.dispatch("logout").then(() => {
        router.push({ path: "login" });
      });
    }
  }
};
</script>
