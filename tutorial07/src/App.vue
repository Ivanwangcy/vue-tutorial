<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <h1><i class="fa fa-camera-retro"></i>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to your Vue.js app!'
    }
  }
}
</script>

<style lang="sass">
  @import "./style.scss"
</style>
