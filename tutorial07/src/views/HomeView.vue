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
  methods: mapActions(['randomTitle', 'loading']),
  created() {

    var data = {
      params: {
        functionId: 'login/testLogin',
        body: '{"jdPin":"jd_57593b3c2bc17"}',
      }
    }
    this.$http.get('/client', data)
    .then((response) => {
      console.log(response);
    }).catch((error) => {

    })
  }

}
</script>
