<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>

    <div class="footer">
      <router-link to="/home"><i class="fa fa-desktop"></i></router-link>
      <router-link to="/about"><i class="fa fa-book"></i></router-link>
    </div>
  </div>
</template>


<style lang="sass">
  @import "./style.scss"
</style>
