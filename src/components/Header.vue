<template>
  <header>
    <div class="logo">
      <router-link to="/">Minusz labs</router-link>
    </div>
    <nav>
      <ul>
        <li v-if="is_auth">
          <router-link :to="{name: 'Dashboard'}">Dashboard</router-link>
        </li>
        <li v-else>
          <router-link :to="{name: 'Login'}">Log In</router-link>
        </li>
      </ul>
      <button type="button" 
              v-on:click="logout"
              v-if="is_auth">Logout</button>
    </nav>
  </header>
</template>

<script>
import store from '@/store';
import router from '@/router';

export default {
  name: 'LoginPage',
  computed: {
    is_auth() {
      return store.getters.is_auth;
    }
  },
  methods: {
    logout: function () {
      store.dispatch('logout').then(() => {
        router.push({path: 'login'});
      });
    }
  }
};
</script>
