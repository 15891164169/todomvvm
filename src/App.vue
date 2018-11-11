<template>
  <div id="app">
    <!-- <HelloWorld/> -->
    <v-content></v-content>
    <v-footer></v-footer>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Content from './components/Content/Content.vue'
import Footer from './components/Footer/Footer.vue'

import { mapState } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapState({
      myCount: state => state.con_data.count
    })
  },
  components: {
    HelloWorld,
    'v-content': Content,
    'v-footer': Footer
  }
}
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
