<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import store from '@/store';
export default {
  name: 'App',
  components: {
    Header
  },
  setup () {
    store.commit('initStore');
  }
}
</script>
