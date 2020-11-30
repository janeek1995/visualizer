<template>
  <h1>Login Page</h1>
  <form @submit.prevent="login">
    <label>User name</label>
    <input required v-model="username" type="text" placeholder="Username"/>
    <label>Password</label>
    <input required v-model="password" type="password" placeholder="Password"/>
    <hr/>
    <button type="submit">Login</button>
  </form>
</template>

<script>
import router from '@/router';
import store from '@/store';

export default {
  name: 'LoginPage',
  data: function() {
    return {
      username: '',
      password: '',
    };
  },
  computed: {
    is_auth() {
      return store.getters.is_auth;
    }
  },
  methods: {
    login: function () {
      let payload = {
        username: this.username,
        password: this.password
      };
      store.dispatch('login', payload).then(() => {
        router.push({path: 'dashboard'}); 
      });
    }
  }
};
</script>
