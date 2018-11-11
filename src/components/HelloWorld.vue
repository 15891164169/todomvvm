<template>
  <div class="hello">
    <h1 @click="myIncrea(2)">{{ msg }}</h1>
    <h2 @click="myDecrea(1)">Essential Links</h2>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    ...mapActions(['myIncrea', 'myDecrea'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
