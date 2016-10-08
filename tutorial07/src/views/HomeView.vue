<template lang="html">
  <div>
    <img class="logo" src="../assets/logo.png"/>
    <h1>
    <i class="fa fa-camera-retro"></i>
    {{ msg }}
    </h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters(['msg'])
}
</script>
