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
  <h2>token: {{ token }}</h2>
</template>

<script>
// import { AUTH_REQUEST } from "../../store/actions/auth";
import axios from 'axios'

export default {
  name: 'LoginPage',
  data() {
    return {
      token: ''
    }
  },
  methods: {
   login: function () {

    let self = this;
    let params = {
      username: this.username,
      password: this.password
    };
    axios.post(
      'http://minusz.com/api/v1/auth/token/login',
      params
    ).then(function (response) {
      self.token = response.data.auth_token;
    })
    .catch(function (error) {
      console.log(error);
    });

     // const { username, password } = this
     // this.$store.dispatch(AUTH_REQUEST, { username, password }).then(() => {
     //   this.$router.push('/')
     // })
   }
  }
}
</script>
