<template>
  <header>
    <div class="logo">
      <router-link to="/">Minusz labs</router-link>
    </div>
    <nav>
      <ul>
        <li v-if="!is_auth">
          <router-link to="/login">Log In</router-link>
        </li>
        <li v-if="is_auth">
          <router-link to="/dashboard">Dashboard</router-link>
        </li>
      </ul>
      <button type="button" 
              v-on:click="logout"
              v-if="is_auth">Logout</button>
    </nav>
  </header>
</template>

<script>
import store from '@/store'
import router from '@/router'

export default {
  name: 'LoginPage',
  computed: {
    is_auth() {
      return store.getters.is_auth
    }
  },
  methods: {
    logout: function () {
      store.dispatch('logout').then(() => {
        console.log('logout');
        router.push({path: 'login'});
      });
    }
  }
}
</script>
