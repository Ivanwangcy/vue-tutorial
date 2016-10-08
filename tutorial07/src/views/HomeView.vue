<template lang="html">
  <div @click="randomTitle">
    <img class="logo" src="../assets/logo.png"/>
    <h1>
    <i class="fa fa-camera-retro"></i>
    {{ msg }}
    </h1>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters(['msg']),
  methods: mapActions(['randomTitle'])
}
</script>
