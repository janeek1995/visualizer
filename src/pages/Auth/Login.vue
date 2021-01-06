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
      <md-list>
        <md-list-item v-for="msg in error_messages" :key="msg">
          <span class="error_msg">{{ msg }}</span>
        </md-list-item>
      </md-list>
    </md-card-content>
    <md-card-actions>
      <md-button class="md-raised md-primary login" v-on:click="login"
        >Login</md-button
      >
    </md-card-actions>
  </md-card>
</template>

<script>
import router from "@/router";
import store from "@/store";

export default {
  name: "LoginPage",
  data: function() {
    return {
      email: "",
      password: "",
      error_messages: []
    };
  },
  computed: {
    is_auth() {
      return store.getters.is_auth;
    }
  },
  methods: {
    login: function() {
      let self = this;
      let payload = {
        email: this.email,
        password: this.password
      };
      store
        .dispatch("login", payload)
        .then(function() {
          router.push({ path: "dashboard" });
        })
        .catch(function(error) {
          self.error_messages = error.data.non_field_errors;
        });
    }
  }
};
</script>

<style scoped>
.md-card {
  width: 600px;
  margin: 40px auto;
  padding: 20px;
}
.md-card-media {
  margin: 20px 10px;
}
.login {
  margin: 0px auto !important;
}
.error_msg {
  color: red;
}
</style>
