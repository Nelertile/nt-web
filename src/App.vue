

<template>
  <div id="app">
    <DesktopNav id="desktop-nav"/>
    <MobileNav id="mobile-nav"/>
    <div class="view-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import DesktopNav from './components/DesktopNav.vue'
import MobileNav from './components/MobileNav.vue'
export default {
  components: {
    DesktopNav,
    MobileNav
  }
}
</script>

<style lang="scss" scoped>
  .view-container {
    width: 79vw;
    padding: .5em;
    margin-left: 20vw;
    box-sizing: border-box;
    min-height: 100vh;
    background-color: #485460;
  }

  #mobile-nav {
    display: none;
  }

@media screen and (max-width: 800px){
  .view-container {
    width: 100%;
    margin-left: 0;
  }
  #desktop-nav {
    display: none;
  }
  #mobile-nav {
    display: flex;
  }
}
</style>
