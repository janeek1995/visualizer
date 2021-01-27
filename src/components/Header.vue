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
      <router-link tag="button" :to="{ name: 'Blog' }" class="md-button"
        >Blog</router-link
      >
      <!--  Auth -->
      <router-link
        tag="button"
        :to="{ name: 'Login' }"
        class="md-button"
        v-if="!is_auth"
        >Log In</router-link
      >
      <router-link
        tag="button"
        :to="{ name: 'Register' }"
        class="md-button"
        v-if="!is_auth"
        >Register</router-link
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
  data: function() {
    return {
      routes_without_header: ["Login", "Register"]
    };
  },
  computed: {
    is_auth() {
      return store.getters.is_auth;
    },
    is_visible() {
      return !this.routes_without_header.includes(this.$route.name);
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

<style lang="scss" scoped>
nav {
  margin-left: auto;
}
.site-logo {
  height: auto !important;
}
</style>
