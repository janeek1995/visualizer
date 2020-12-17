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
  setup () {
    store.commit('initStore')
  },
  components: {
    Header: Header
  }
};
</script>
