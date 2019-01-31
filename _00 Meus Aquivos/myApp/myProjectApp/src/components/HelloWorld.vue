<template>
  <div>
    <h1>{{ msg }}</h1>
    <v-btn color="success">Success</v-btn>
  </div>
</template>

<script>
import 'vuetify/dist/vuetify.min.css'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
