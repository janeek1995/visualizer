<template>
  <div id="app">
    <app-header />
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import store from '@/store'

export default {
  name: 'App',
  setup () {
    store.commit('initStore')
  },
  components: {
    'app-header': Header
  }
}
</script>
