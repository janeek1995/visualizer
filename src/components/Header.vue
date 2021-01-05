<template>
  <md-toolbar v-if="is_visible">
    <router-link to="/" class="md-button site-logo"
      ><img src="@/assets/minusz_logo.png"
    /></router-link>
    <nav>
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
    </nav>
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
    },
    is_visible() {
      return this.$route.name !== "Login";
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

<style>
nav {
  margin-left: auto;
}
.site-logo {
  height: auto !important;
}
</style>
